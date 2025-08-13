import React from "react";
import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";

function ProtectedNavbar() {
  return (
    <nav className="bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)] sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-semibold text-[var(--foreground)]">
                Next + Clerk
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-10 h-10",
                  userButtonTrigger:
                    "ring-2 ring-[var(--ring)]/30 hover:ring-[var(--ring)]/50 rounded-full transition-colors duration-200 bg-[var(--background)]/10 backdrop-blur-sm p-1",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ProtectedNavbar;
