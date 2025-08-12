// app/dashboard/layout.tsx
import ProtectedNavbar from "@/components/layout/ProtectedNavbar";
import { type ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ProtectedNavbar />
      {children}
    </div>
  );
}
