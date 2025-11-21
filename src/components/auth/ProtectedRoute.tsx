
"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("user_token");

        setIsAuthenticated(!!token);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isAuthenticated, isLoading };
};

const UNAUTHENTICATED_REDIRECT = "/signin";
const PROTECTED_PATHS = ["/dashboards", "/inventory", "/profile"];

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const currentPath = pathname || "";

  const isProtectedPath = PROTECTED_PATHS.some((path) =>
    currentPath.startsWith(path)
  );

  useEffect(() => {
    if (!isLoading && isProtectedPath && !isAuthenticated) {
      router.replace(UNAUTHENTICATED_REDIRECT);
    }
  }, [isLoading, isProtectedPath, isAuthenticated, router]);

  if (isLoading && isProtectedPath) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Authenticating...
      </div>
    );
  }
    
  if (isProtectedPath && !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
