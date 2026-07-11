import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { gameCategories } from "@/lib/games";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/games",
    "/tournaments",
    "/leaderboard",
    "/rewards",
    "/about",
    "/careers",
    "/press",
    "/blog",
    "/sister-companies",
    "/faq",
    "/contact",
    "/support",
    "/login",
    "/register",
    "/terms",
    "/privacy",
    "/responsible-play",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const gameRoutes = gameCategories.map((category) => ({
    url: `${siteConfig.url}/games/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...gameRoutes, ...blogRoutes];
}
