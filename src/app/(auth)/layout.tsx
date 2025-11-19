// src/app/(auth)/layout.tsx

import React from "react";

/**
 * AuthLayout component for pages in the (auth) route group.
 * This layout deliberately omits the global LayoutHeader and LayoutFooter
 * to provide a clean, focused view for sign-in, sign-up, and password reset.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Only render the child page content.
    // This is where your sign-in, sign-up, etc. pages will be injected.
    <div className="min-h-screen">{children}</div>
  );
}
