import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import ChatWidget from "@/components/chat/chat-widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Periphery Studios",
  description: "Narrative through nuance",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Providers>
            <div className="min-h-screen flex flex-col">
              <Header className="sticky top-0 z-10" />
              <main className="flex-1">{children}</main>
              <Footer />
              <ChatWidget />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
