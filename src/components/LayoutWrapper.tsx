"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isWaitingListPage =
    pathname !== null && 
    (pathname.includes("waitlist") || pathname === "/"); 

  if (isWaitingListPage) {
    return <>{children}</>;
  }
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
