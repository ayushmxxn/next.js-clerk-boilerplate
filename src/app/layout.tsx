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
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Clerk authentication",
    "dark mode",
    "boilerplate",
    "starter template",
    "web development",
    "full-stack",
    "authentication",
    "responsive design",
    "modern web app",
    "JavaScript framework",
    "SSR",
    "server-side rendering",
    "Tailwind CSS",
    "theme switching",
    "ayushmxxn",
    "Ayushmaan Singh",
  ],
  openGraph: {
    title: "Next.js + Clerk Boilerplate",
    description:
      "Ready to go Next.js 14 starter with Clerk authentication and dark mode support.",
    url: "https://i.ibb.co/1SsyMLx/next-clerk-boilerplate-thumbnail.png",
    siteName: "Next.js + Clerk Boilerplate",
    images: [
      {
        url: "https://i.ibb.co/1SsyMLx/next-clerk-boilerplate-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Next.js + Clerk Boilerplate - Modern web development starter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js + Clerk Boilerplate",
    description:
      "Ready to go Next.js 14 starter with Clerk authentication and dark mode support.",
    images: ["https://i.ibb.co/1SsyMLx/next-clerk-boilerplate-thumbnail.png"],
  },
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
