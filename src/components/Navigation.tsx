"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react"; 

const PRIMARY_MAROON = "#800020";
const ACCENT_COLOR = "#FCE7EB";

interface NavLinkItem {
  href: string;
  label: string;
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; 
}
const NAV_LINKS: NavLinkItem[] = [
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];
const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  className = "",
  onClick,
}) => (
  <Link
    href={href}
    className={`text-sm font-medium text-slate-900 hover:text-red-700 transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-slate-950 shadow-sm mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div
              className="h-8 w-8 rounded overflow-hidden"
              style={{ backgroundColor: PRIMARY_MAROON }}
            >
              <Image
                src="/logo.png"
                alt="StockKeeper Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-cover"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              StockKeeper
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 mx-auto">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.href} href={link.href}>
                {link.label}
              </NavItem>
            ))}
          </nav>
          <div className="flex items-center gap-4 shrink-0">
            <Button
              variant="ghost"
              asChild
              className="hidden md:inline-flex text-slate-900 hover:bg-gray-100"
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              className="text-sm px-6 py-2.5 font-semibold transition-colors shadow-lg hover:brightness-110"
              style={{ backgroundColor: PRIMARY_MAROON, color: "white" }}
              asChild
            >
              <Link href="/trial">Start Free Trial</Link>
            </Button>
            <button
              className="lg:hidden p-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-40 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 max-w-full shadow-2xl z-50 transform transition-transform duration-300 ease-in-out`}
        style={{
          backgroundColor: ACCENT_COLOR, // #FCE7EB
          transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",
        }}
      >
        {/* Close Button */}
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

        {/* Navigation Items */}
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
              style={{ backgroundColor: PRIMARY_MAROON, color: "white" }}
              asChild
            >
              <Link href="/trial">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
