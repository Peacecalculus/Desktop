"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { PRIMARY_MAROON } from "./shared";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between lg:hidden h-16">
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
            <span className="text-xl font-bold text-slate-900">
              StockKeeper
            </span>
          </Link>

          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Desktop Layout - Full navbar */}
        <div className="hidden lg:block">
          <DesktopNav />
        </div>
      </div>
    </header>
  );
}
