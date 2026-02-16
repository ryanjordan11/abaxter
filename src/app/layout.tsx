import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scott Baxter",
  description: "Soul analysis, numerology, and relationship alignment by Scott Baxter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-(--app-bg) text-(--app-fg) font-sans selection:bg-(--accent) selection:text-(--accent-contrast)">
          <div className="fixed inset-0 pointer-events-none opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.05)_0%,_transparent_70%)]"></div>
          </div>

          <Navbar />

          <main className="pt-32 pb-20">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
