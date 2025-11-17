"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-slate-900 dark:text-white">StoreKeeper</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href={isHomePage ? "#features" : "/#features"} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link 
              href={isHomePage ? "#benefits" : "/#benefits"} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Benefits
            </Link>
            <Link 
              href={isHomePage ? "#use-cases" : "/#use-cases"} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Use Cases
            </Link>
            <Link 
              href={isHomePage ? "#pricing" : "/#pricing"} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
