"use client";

import Link from "next/link";
import { useEffect } from "react";
import { LayoutGrid, Package, Tags, BarChart3, Settings, X } from "lucide-react";

const PRIMARY = "#800020";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/products", label: "Products", icon: Package },
  { href: "/categories", label: "Categories", icon: Tags },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  // close on escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      <aside
        className={`fixed lg:static top-0 left-0 h-full lg:h-auto w-72 lg:w-64 bg-white border-r z-50 lg:z-auto transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} relative flex flex-col`}
      >
        <div className="h-16 border-b px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded overflow-hidden" style={{ backgroundColor: PRIMARY }}></div>
            <span className="font-bold text-lg text-gray-900">StockKeeper</span>
          </div>
          <button className="lg:hidden p-2 cursor-pointer" onClick={onClose} aria-label="Close sidebar">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-3 py-4 space-y-1 flex-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }, i) => (
            <Link
              key={i}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 text-gray-700 cursor-pointer`}
            >
              <Icon className="h-5 w-5" />
              <span>{label==="Dashboard"?"Dashboard Overview":label}</span>
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-4 mt-auto">
          <div className="flex items-center gap-3 p-3 rounded-lg border">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div>
              <p className="text-sm font-semibold text-gray-900">John Do</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}