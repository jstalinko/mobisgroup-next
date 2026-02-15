import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/Header";
import { getSession } from "@/lib/auth";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "MobisGroup.ID - Streaming Drama Pendek",
  description: "Nonton drama pendek gratis dan tanpa iklan di MobisGroup.ID.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const isLoggedIn = !!session;
  const isAdmin = session?.role === 'admin';

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          <Suspense fallback={<div className="h-16" />}>
            <Header initialIsLoggedIn={isLoggedIn} initialIsAdmin={isAdmin} />
          </Suspense>
          {children}
          <Footer />
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
