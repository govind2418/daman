import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { JsonLd } from "@/components/shared/JsonLd";
import { siteConfig } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Daman Game",
    "Daman Login",
    "damangame",
    "damangame.co.in",
    "Daman Game login",
    "Daman Game register",
    "skill gaming",
    "esports tournaments",
    "gaming leaderboard",
    "competitive gaming platform",
    "arcade games online",
  ],
  authors: [{ name: siteConfig.fullName }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "TxdfQy9uq6RxP_A2OHn1irXTPkfhIOyjPhYcKagITA0",
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground pb-16 lg:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand-red focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <MobileStickyCta />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.fullName,
            alternateName: ["Daman Game", "damangame", "Daman"],
            url: siteConfig.url,
            logo: `${siteConfig.url}/icon.svg`,
            description: siteConfig.description,
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.fullName,
            alternateName: ["Daman Game", "damangame"],
            url: siteConfig.url,
          }}
        />
      </body>
    </html>
  );
}
