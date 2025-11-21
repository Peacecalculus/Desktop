// --- TYPES ---
export interface Organization {
  id: number;
  name: string;
  description: string;
  status: "owner" | "admin";
  memberCount: number;
  createdAt: Date;
  updatedAt?: Date;
  isOwner: boolean;
  productCount: number;
  deleted: boolean;
}

export interface Invitation {
  id: number;
  name: string;
  invitedBy: string;
  daysAgo: number;
  accepted: boolean;
  declined: boolean;
}

export interface OrganizationFormData {
  name: string;
  description: string;
  status: "owner" | "admin";
  memberCount: number;
}

// --- MOCK DATA ---
export const initialInvitations: Invitation[] = [
  {
    id: 1,
    name: "Global Supplies Ltd.",
    invitedBy: "Sarah Johnson",
    daysAgo: 2,
    accepted: false,
    declined: false,
  },
  {
    id: 2,
    name: "Manufacturing Hub",
    invitedBy: "Michael Chen",
    daysAgo: 5,
    accepted: false,
    declined: false,
  },
  {
    id: 3,
    name: "Distribution Center Pro",
    invitedBy: "Emma Wilson",
    daysAgo: 7,
    accepted: false,
    declined: false,
  },
];

// --- STORAGE KEYS ---
export const STORAGE_KEYS = {
  ORGANIZATIONS: "stockkeeper_organizations",
  INVITATIONS: "stockkeeper_invitations",
};
