"use client";

import { Menu, Plus, Bell } from "lucide-react";
import Link from "next/link";

const PRIMARY = "#800020";

export default function Topbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <div className="h-16 bg-white border-b px-4 lg:px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="lg:hidden p-2 cursor-pointer" onClick={onToggleSidebar} aria-label="Open sidebar">
          <Menu className="h-6 w-6" />
        </button>
        <div>
          <h1 className="text-lg md:text-xl font-semibold text-gray-900">Dashboard Overview</h1>
          <p className="text-xs text-gray-500">Welcome back, John! Here&apos;s your inventory summary.</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Notification icon */}
        <button className="relative w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center cursor-pointer">
          <Bell className="h-4 w-4 text-gray-700" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
     
        <Link
          href="/products/create"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white shadow-sm cursor-pointer"
          style={{ backgroundColor: PRIMARY }}
        >
          <Plus className="h-4 w-4" />
          <span className="text-sm font-semibold">Add Product</span>
        </Link>
      </div>
    </div>
  );
}