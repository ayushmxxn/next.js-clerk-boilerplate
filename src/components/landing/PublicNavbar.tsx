"use client";

import React from "react";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

function PublicNavbar() {
  return (
    <nav className="bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)] sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold text-[var(--foreground)]">
              Next + Clerk
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <SignedOut>
              <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
                <button className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[var(--background)] bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 h-10 py-2 px-4 cursor-pointer">
                  Dashboard
                </button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default PublicNavbar;
