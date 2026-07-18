import type { Metadata } from "next";
import { Check, Gift, Medal, Crown, Gem } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Rewards",
  description:
    "Explore the Daman Game reward tiers — Bronze, Silver, Gold, and Platinum — and see what each rank unlocks.",
  path: "/rewards",
});

const tiers = [
  {
    name: "Bronze",
    icon: Medal,
    points: "0 – 5,000",
    perks: ["Starter cosmetic pack", "Daily challenge access", "Community badge"],
    highlight: false,
  },
  {
    name: "Silver",
    icon: Gift,
    points: "5,000 – 20,000",
    perks: ["Seasonal cosmetic drops", "Priority matchmaking queue", "Profile flair"],
    highlight: false,
  },
  {
    name: "Gold",
    icon: Crown,
    points: "20,000 – 60,000",
    perks: ["Exclusive tournament entries", "Animated profile badge", "Early feature access"],
    highlight: true,
  },
  {
    name: "Platinum",
    icon: Gem,
    points: "60,000+",
    perks: ["Champion cosmetic sets", "Dedicated support line", "Hall of Fame listing"],
    highlight: false,
  },
];

export default function RewardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rewards"
        title="Rank up. Unlock more."
        description="Every match and tournament earns Daman Points — climb the tiers to unlock cosmetics, priority queues, and exclusive access."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Rewards" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map(({ name, icon: Icon, points, perks, highlight }) => (
              <GlassCard
                key={name}
                as="article"
                className={cn(highlight && "ring-1 ring-brand-orange/50")}
              >
                {highlight && (
                  <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                  <Icon size={22} className="text-brand-gold" aria-hidden />
                </div>
                <h2 className="mt-4 font-display text-xl font-bold text-white">
                  {name}
                </h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  {points} pts
                </p>
                <ul className="mt-5 space-y-2.5">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-white/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-gold" aria-hidden />
                      {perk}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button href="/register" variant="primary" size="lg">
              Start Earning Points
            </Button>
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Games", href: "/games", description: "Browse all four game categories." },
          { label: "Tournaments", href: "/tournaments", description: "Browse weekly cups and seasonal championships." },
          { label: "Leaderboard", href: "/leaderboard", description: "See this week's top-ranked players." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Rewards", path: "/rewards" },
        ])}
      />
    </>
  );
}
