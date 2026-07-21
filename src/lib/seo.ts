import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const coreKeywords = [
  "Daman Game",
  "Daman Login",
  "damangame",
  "Daman Game Login",
  "Daman App",
  "damangame.co.in",
  "Daman Game Register",
  "Daman Game Download",
];

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  keywords,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  /** Override the OG/Twitter title instead of appending " | Daman Game" — use when `title` already contains the brand name. */
  ogTitle?: string;
  /** Page-specific keywords, appended after the site-wide core keyword set. */
  keywords?: string[];
  /** Exact <title> tag text, bypassing the root " | Daman Game" template — use for keyword-targeted titles that already read complete on their own. */
  absoluteTitle?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const resolvedOgTitle = ogTitle ?? absoluteTitle ?? `${title} | ${siteConfig.fullName}`;
  const ogImage = {
    url: "/images/daman-game-hero.jpg",
    width: 1536,
    height: 1024,
    alt: "Daman Game — Play More, Win More",
  };
  const resolvedKeywords = keywords
    ? Array.from(new Set([...coreKeywords, ...keywords]))
    : coreKeywords;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: resolvedKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: resolvedOgTitle,
      description,
      url,
      siteName: siteConfig.fullName,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export type BreadcrumbSchemaItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${siteConfig.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  };
}
