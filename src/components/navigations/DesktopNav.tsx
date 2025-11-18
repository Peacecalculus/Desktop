"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import { NAV_LINKS, PRIMARY_MAROON, NavItem } from "./shared";

export default function DesktopNav() {
  return (
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
      </div>
    </div>
  );
}