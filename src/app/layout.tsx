import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ThemeWrapper from "@/components/wrappers/ThemeWrapper";
import NavbarWrapper from "@/components/wrappers/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js + Clerk Boilerplate",
  description:
    "Ready to go Next.js 14 starter with Clerk authentication and dark mode support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeWrapper>
            <NavbarWrapper />
            {children}
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
