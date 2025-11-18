"use client";

import React from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, ACCENT_COLOR, NavItem } from "./shared";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
}

export default function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className="lg:hidden p-2 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-40 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <div
        className="lg:hidden fixed top-0 right-0 h-full w-64 max-w-full shadow-2xl z-50 transform transition-transform duration-300 ease-in-out"
        style={{
          backgroundColor: ACCENT_COLOR,
          transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",
        }}
      >
        <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200 cursor-pointer">
          <span className="text-lg font-bold text-[#111827]">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-700 hover:text-gray-900 cursor-pointer"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <div className="flex flex-col space-y-2 py-4 px-4">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              className="py-2 text-slate-800 hover:text-red-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavItem>
          ))}

          <div className="pt-4 mt-2 border-t border-gray-200">
            <Button
              variant="ghost"
              asChild
              className="w-full justify-start text-slate-800 hover:bg-red-100"
            >
              <Link href="/login">Sign In</Link>
            </Button>

            <Button
              className="w-full mt-2 text-base"
              asChild
              style={{ backgroundColor: "#800020", color: "white" }}
            >
              <Link href="/trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}