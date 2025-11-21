"use client";

import React from "react";
import { usePathname } from "next/navigation";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPath = pathname || "";

  // Routes that don't need header/footer (auth pages)
  const isAuthRoute =
    currentPath.startsWith("/signin") ||
    currentPath.startsWith("/signup") ||
    currentPath.startsWith("/forgot-password") ||
    currentPath.startsWith("/reset-password") ||
    currentPath.startsWith("/reset-success") ||
    currentPath.startsWith("/app") ||
    currentPath.startsWith("/dashboard") ||
    currentPath.startsWith("/auth");

  return (
    <>
      {!isAuthRoute && <LayoutHeader />}
      {children}
      {!isAuthRoute && <LayoutFooter />}
    </>
  );
}
