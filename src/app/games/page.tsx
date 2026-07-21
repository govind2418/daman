import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { gameCategories } from "@/lib/games";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Games",
  description:
    "Browse Daman Game's skill-based game categories — Arcade, Strategy, Racing, and Puzzle — and jump into ranked matches today.",
  path: "/games",
  keywords: ["Daman Game Games List", "Daman Game Arcade", "Daman Game Strategy", "Daman Game Racing", "Daman Game Puzzle"],
});

export default function GamesPage() {
  return (
    <>
      <PageHero
        eyebrow="Game Library"
        title="Four arenas. One competitive edge."
        description="Every category is built around fair matchmaking and genuine skill progression — pick your arena and start climbing."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Games" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {gameCategories.map((category) => (
              <Link key={category.slug} href={`/games/${category.slug}`}>
                <GlassCard as="article" className="h-full">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                      <category.icon
                        size={22}
                        className="text-brand-gold"
                        aria-hidden
                      />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted">
                      <Users size={12} aria-hidden />
                      {category.players}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-white">
                    {category.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-brand-gold">
                    {category.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    Explore {category.name}
                    <ArrowRight size={16} aria-hidden />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Tournaments", href: "/tournaments", description: "Browse weekly cups and seasonal championships." },
          { label: "Leaderboard", href: "/leaderboard", description: "See the top-ranked players this week." },
          { label: "Rewards", href: "/rewards", description: "See what each reward tier unlocks." },
          { label: "Register", href: "/register", description: "Create a free account." },
          { label: "Login", href: "/login", description: "Sign in to an existing account." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Games", path: "/games" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: gameCategories.map((category, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: category.name,
            url: `${siteConfig.url}/games/${category.slug}`,
          })),
        }}
      />
    </>
  );
}
