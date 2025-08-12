// app/components/landing/NavbarWrapper.tsx
"use client";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import PublicNavbar from "../landing/PublicNavbar";

export default function NavbarWrapper() {
  const { userId } = useAuth();
  const pathname = usePathname();
  const publicRoutes = ["/sign-in", "/sign-up"];
  const isHomePage = pathname === "/";

  // Render PublicNavbar for:
  // 1. Home page (/) regardless of authentication status
  // 2. Other public routes (/sign-in, /sign-up) only for unauthenticated users
  if (
    isHomePage ||
    (!userId && publicRoutes.some((route) => pathname.startsWith(route)))
  ) {
    return <PublicNavbar />;
  }
  return null;
}
