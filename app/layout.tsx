"use client"
import { ReactNode, useEffect } from "react"
import { SessionProvider, useSession, signOut } from "next-auth/react"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AuthProvider } from "@/lib/auth-context";
import { ToastProvider } from '@/contexts/toast-context'
import { Toaster } from '@/components/ui/toaster'
import localFont from 'next/font/local'

const tanMeringue = localFont({
  src: [
    {
      path: './fonts/TAN MERINGUE.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/TAN MERINGUE.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-tan-meringue',
  display: 'swap',
})
const tanHeading = localFont({
  src: [
    {
      path: './fonts/TANHEADLINE-Regular.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/TANHEADLINE-Regular.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-tan-heading',
  display: 'swap',
})

// Create a component to check session validity
function SessionCheck({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession()
  
  useEffect(() => {
    // If we have a session but it's invalid or expired
    if (session && (session as any).error === "RefreshAccessTokenError") {
      // Force sign out
      signOut({ callbackUrl: "/" })
    }
  }, [session])  
  return <>{children}</>
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={` ${tanMeringue.variable} ${tanHeading.variable}`}>
      <body>
        <div>
          <AuthProvider>
            <ThemeProvider>
              <ToastProvider>
                {children}
                <Toaster />
              </ToastProvider>
            </ThemeProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
