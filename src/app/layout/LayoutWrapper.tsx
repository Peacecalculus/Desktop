"use client";

import React from "react";
import { usePathname } from "next/navigation";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPath = pathname || ""; 
  const isAuthRoute =
    currentPath.startsWith("/signin") ||
    currentPath.startsWith("/signup") ||
    currentPath.startsWith("/reset-password") ||
    currentPath.startsWith("/reset-success") ||
    currentPath.startsWith("/auth"); 

  return (
    <>
      {!isAuthRoute && <LayoutHeader />}
      <ProtectedRoute>{children}</ProtectedRoute>
      {!isAuthRoute && <LayoutFooter />}
    </>
  );
}
