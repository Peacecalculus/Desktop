"use client";
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <Settings className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500">Settings page coming soon</p>
      </div>
    </div>
  );
}