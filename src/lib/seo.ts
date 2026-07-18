import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
}: {
  title: string;
  description: string;
  path: string;
  /** Override the OG/Twitter title instead of appending " | Daman Game" — use when `title` already contains the brand name. */
  ogTitle?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const resolvedOgTitle = ogTitle ?? `${title} | ${siteConfig.fullName}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: resolvedOgTitle,
      description,
      url,
      siteName: siteConfig.fullName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description,
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
