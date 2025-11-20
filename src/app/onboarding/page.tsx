// Corrected and Cleaned Code
"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import React from "react";

import {
  Organization,
  Invitation,
  OrganizationFormData,
  STORAGE_KEYS,
  initialInvitations,
} from "@/components/onboarding/constants";

import Header from "@/components/onboarding/Header";
import OrganizationsGrid from "@/components/onboarding/OrganizationsGrid";
import EmptyState from "@/components/onboarding/EmptyState";
import DeleteConfirmationModal from "@/components/onboarding/DeleteConfirmationModal";
import CreateEditOrgModal from "@/components/onboarding/CreateEditOrgModal";

export default function OnboardingPage() {
  const [showCreateEditModal, setShowCreateEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingOrg, setEditingOrg] = useState<Organization | null>(null);
  const [orgToDelete, setOrgToDelete] = useState<Organization | null>(null);
  const [filter, setFilter] = useState<"all" | "my">("all");

  // ------------------------------------
  // Load saved organizations ONLY ONCE
  // ------------------------------------
  const [organizations, setOrganizations] = useState<Organization[]>(() => {
    if (typeof window === "undefined") return [];

    const saved = localStorage.getItem(STORAGE_KEYS.ORGANIZATIONS);
    if (!saved) return [];

    return JSON.parse(saved).map((org: Organization) => ({
      ...org,
      createdAt: new Date(org.createdAt),
      updatedAt: org.updatedAt ? new Date(org.updatedAt) : undefined,
    }));
  });

  // ------------------------------------
  // Load saved invitations ONLY ONCE
  // ------------------------------------
  const [invitations, setInvitations] = useState<Invitation[]>(() => {
    if (typeof window === "undefined") return initialInvitations;

    const saved = localStorage.getItem(STORAGE_KEYS.INVITATIONS);
    return saved ? JSON.parse(saved) : initialInvitations;
  });

  const [formData, setFormData] = useState<OrganizationFormData>({
    name: "",
    description: "",
    status: "owner",
    memberCount: 1,
  });

  // ------------------------------------
  // Persist organizations
  // ------------------------------------
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.ORGANIZATIONS,
      JSON.stringify(organizations)
    );
  }, [organizations]);

  // ------------------------------------
  // Persist invitations
  // ------------------------------------
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INVITATIONS, JSON.stringify(invitations));
  }, [invitations]);

  // ------------------------------------
  // Handlers
  // ------------------------------------
  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      description: "",
      status: "owner",
      memberCount: 1,
    });
  }, []);

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: name === "memberCount" ? parseInt(value) || 0 : value,
      }));
    },
    []
  );

  const handleOpenCreateModal = useCallback(() => {
    setEditingOrg(null);
    resetForm();
    setShowCreateEditModal(true);
  }, [resetForm]);

  const handleCreateOrUpdate = useCallback(() => {
    if (!formData.name.trim()) {
      alert("Please enter an organization name");
      return;
    }

    if (editingOrg) {
      setOrganizations((prev) =>
        prev.map((org) =>
          org.id === editingOrg.id
            ? {
                ...org,
                ...formData,
                memberCount: Number(formData.memberCount),
                updatedAt: new Date(),
              }
            : org
        )
      );
    } else {
      const newOrg: Organization = {
        id: Date.now(),
        ...formData,
        memberCount: Number(formData.memberCount),
        createdAt: new Date(),
        isOwner: formData.status === "owner",
        productCount: 0,
        deleted: false,
      };

      setOrganizations((prev) => [...prev, newOrg]);
    }

    resetForm();
    setShowCreateEditModal(false);
    setEditingOrg(null);
  }, [formData, editingOrg, resetForm]);

  const handleEdit = useCallback((org: Organization) => {
    setEditingOrg(org);
    setFormData({
      name: org.name,
      description: org.description,
      status: org.status,
      memberCount: org.memberCount,
    });
    setShowCreateEditModal(true);
  }, []);

  const handleOpenDeleteModal = useCallback(
    (id: number) => {
      const org = organizations.find((o) => o.id === id);
      if (org) {
        setOrgToDelete(org);
        setShowDeleteModal(true);
      }
    },
    [organizations]
  );

  const handleConfirmDelete = useCallback(() => {
    if (orgToDelete) {
      setOrganizations((prev) =>
        prev.map((org) =>
          org.id === orgToDelete.id ? { ...org, deleted: true } : org
        )
      );
    }
    setShowDeleteModal(false);
    setOrgToDelete(null);
  }, [orgToDelete]);

  const handleAcceptInvitation = useCallback((id: number) => {
    setInvitations((prev) =>
      prev.map((inv) =>
        inv.id === id ? { ...inv, accepted: true, declined: false } : inv
      )
    );
  }, []);

  const handleDeclineInvitation = useCallback((id: number) => {
    setInvitations((prev) =>
      prev.map((inv) =>
        inv.id === id ? { ...inv, declined: true, accepted: false } : inv
      )
    );
  }, []);

  // ------------------------------------
  // Memoized values
  // ------------------------------------
  const activeOrganizations = useMemo(
    () => organizations.filter((org) => !org.deleted),
    [organizations]
  );

  const filteredOrgs = useMemo(() => {
    return activeOrganizations.filter((org) =>
      filter === "my" ? org.isOwner : true
    );
  }, [activeOrganizations, filter]);

  const myOrgsCount = useMemo(() => {
    return activeOrganizations.filter((org) => org.isOwner).length;
  }, [activeOrganizations]);

  const pendingInvitationsCount = useMemo(() => {
    if (activeOrganizations.length === 0) return 0;
    return invitations.filter((inv) => !inv.accepted && !inv.declined).length;
  }, [invitations, activeOrganizations]);

  // ------------------------------------
  // Render
  // ------------------------------------
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header
        pendingInvitationsCount={pendingInvitationsCount}
        invitations={invitations}
        onAccept={handleAcceptInvitation}
        onDecline={handleDeclineInvitation}
      />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeOrganizations.length === 0 ? (
          <EmptyState onCreateOrg={handleOpenCreateModal} />
        ) : (
          <OrganizationsGrid
            organizations={organizations}
            filter={filter}
            setFilter={setFilter}
            myOrgsCount={myOrgsCount}
            filteredOrgs={filteredOrgs}
            onCreateOrg={handleOpenCreateModal}
            onEditOrg={handleEdit}
            onDeleteOrg={handleOpenDeleteModal}
            invitations={invitations}
            onAccept={handleAcceptInvitation}
            onDecline={handleDeclineInvitation}
            hasActiveOrganizations={activeOrganizations.length > 0}
          />
        )}
      </main>

      <CreateEditOrgModal
        show={showCreateEditModal}
        editingOrg={editingOrg}
        formData={formData}
        onClose={() => {
          setShowCreateEditModal(false);
          setEditingOrg(null);
          resetForm();
        }}
        onInputChange={handleInputChange}
        onSave={handleCreateOrUpdate}
      />

      {showDeleteModal && orgToDelete && (
        <DeleteConfirmationModal
          organization={orgToDelete}
          onConfirm={handleConfirmDelete}
          onCancel={() => {
            setShowDeleteModal(false);
            setOrgToDelete(null);
          }}
        />
      )}
    </div>
  );
}
