import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Scott Baxter";
const defaultTitle = "Scott Baxter | LifePath Coaching";
const defaultDescription = "Soul analysis, numerology, and relationship alignment by Scott Baxter.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: defaultTitle,
    template: "%s | Scott Baxter"
  },
  description: defaultDescription,
  verification: {
    google: "1234567"
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    siteName,
    url: siteUrl || undefined
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription
  }
};

const themeScript = `
(() => {
  try {
    const key = 'theme';
    const stored = localStorage.getItem(key);
    const theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Script
          id="jsonld-site"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: siteName,
                  url: siteUrl || undefined,
                  telephone: "(254)654-1671",
                  email: "baxtersd@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "1102 Post Oak St.",
                    addressLocality: "Hearne",
                    addressRegion: "TX",
                    postalCode: "77859",
                    addressCountry: "US"
                  },
                  areaServed: "Online",
                  priceRange: "$$"
                },
                {
                  "@type": "WebSite",
                  name: siteName,
                  url: siteUrl || undefined
                }
              ]
            })
          }}
        />
      </head>
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

          <CTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
