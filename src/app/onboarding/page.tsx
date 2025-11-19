"use client";
import React, { useState } from "react";
import {
  Plus,
  Building2,
  Mail,
  Package,
  Users,
  TrendingUp,
  BookOpen,
  Video,
  HelpCircle,
  Bell,
} from "lucide-react";
import Image from "next/image";

export default function OnboardingPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-[#800020] rounded-lg flex items-center justify-center shadow-md">
              <Package className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">StockKeeper</h1>
              <p className="text-xs text-gray-500">Inventory Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition active:scale-95">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-sm font-semibold text-gray-700">U</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 shadow-lg">
            <span className="text-3xl">👋</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Welcome to StockKeeper!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Were excited to have you here. Get started by creating your first
            organization to begin managing your inventory efficiently.
          </p>
        </div>

        {/* Create Organization Card - Now uses a styled div for the visual */}
        <div className="bg-linear-to-r from-[#800020] to-[#a00028] rounded-2xl p-8 mb-8 text-white shadow-2xl transform hover:scale-[1.005] transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                  <Plus className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold">
                  Create Your First Organization
                </h3>
              </div>
              <p className="text-white/90 mb-6 max-w-lg text-lg">
                Set up your organization in minutes and start tracking your
                inventory today.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-white text-[#800020] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95"
              >
                <Plus className="h-5 w-5" />
                Create Organization
              </button>
            </div>
            <Image
              src="/workspace.jpg"
              alt="A dark blue backpack representing inventory"
              width={250}
              height={250}
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Your Organizations */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Your Organizations
              </h3>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium border border-gray-300">
                0 Active
              </span>
            </div>
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 shadow-inner">
                <Building2 className="h-8 w-8 text-gray-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                No Organizations Yet
              </h4>
              <p className="text-gray-600 mb-6 text-sm max-w-xs mx-auto">
                Create your first organization to start managing your inventory
                and collaborate with your team.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#800020] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#600018] transition flex items-center gap-2 mx-auto shadow-md active:scale-95"
              >
                <Plus className="h-4 w-4" />
                Create Organization
              </button>
            </div>
          </div>

          {/* Pending Invitations */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Pending Invitations
              </h3>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium border border-gray-300">
                0 New
              </span>
            </div>
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 shadow-inner">
                <Mail className="h-8 w-8 text-gray-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                No Invitations
              </h4>
              <p className="text-gray-600 text-sm max-w-xs mx-auto mb-4">
                You dont have any pending invitations at the moment. Check back
                later or create your own organization.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg border border-gray-200">
                <HelpCircle className="h-4 w-4 text-blue-500" />
                <span>Invitations will appear here when received</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 shadow-md">
              <Package className="h-7 w-7 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Track Inventory
            </h4>
            <p className="text-gray-600 text-sm">
              Monitor stock levels, categories, and product details in
              real-time.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-4 shadow-md">
              <Users className="h-7 w-7 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Collaborate
            </h4>
            <p className="text-gray-600 text-sm">
              Invite team members and manage permissions effortlessly.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-lg transition">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-xl mb-4 shadow-md">
              <TrendingUp className="h-7 w-7 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Generate Reports
            </h4>
            <p className="text-gray-600 text-sm">
              Get insights with detailed analytics and reporting tools.
            </p>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-md">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Need Help Getting Started?
              </h4>
              <p className="text-gray-700 text-sm mb-4">
                Learn how to set up your organization, invite team members, and
                start managing your inventory efficiently. Our comprehensive
                guides will help you get up and running in no time.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition shadow-sm active:scale-95">
                  <BookOpen className="h-4 w-4 text-[#800020]" />
                  View Documentation
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition shadow-sm active:scale-95">
                  <Video className="h-4 w-4 text-[#800020]" />
                  Watch Tutorial
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition shadow-sm active:scale-95">
                  <Mail className="h-4 w-4 text-[#800020]" />
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Create Organization
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  placeholder="My Company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent outline-none transition"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition active:scale-[0.98]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 bg-[#800020] text-white rounded-lg font-semibold hover:bg-[#600018] transition shadow-md active:scale-[0.98]"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
