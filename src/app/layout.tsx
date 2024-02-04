import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"

import Header from '@/components/header'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Blogger",
  description: "Generate a blog post about anything using OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={ inter.className }>
        <Header />
          <main>{ children }</main>
          <Toaster position='top-right' theme='light' richColors />
      </body>
      </html>
    </ClerkProvider>
  );
}
