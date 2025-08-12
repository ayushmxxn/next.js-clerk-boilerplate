"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme(); // Get theme from next-themes
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <ClerkProvider appearance={{ baseTheme: dark }}>{children}</ClerkProvider>
    );
  }

  // Determine Clerk theme based on resolvedTheme
  const clerkTheme = resolvedTheme === "dark" ? dark : undefined;

  return (
    <ClerkProvider appearance={{ baseTheme: clerkTheme }}>
      {children}
    </ClerkProvider>
  );
}
