import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/daman-game", priority: 0.9 },
  { path: "/daman-game-login", priority: 0.8 },
  { path: "/daman-game-app", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
  { path: "/responsible-play", priority: 0.6 },
  { path: "/terms", priority: 0.4 },
  { path: "/privacy", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
