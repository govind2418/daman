import type { Metadata } from "next";
import { Crown } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leaderboard",
  description:
    "See the top-ranked Daman Game players across Arcade, Strategy, Racing, and Puzzle this season.",
  path: "/leaderboard",
});

const players = [
  { rank: 1, name: "ShadowRift", category: "Racing", points: 98240 },
  { rank: 2, name: "Kestrel_X", category: "Strategy", points: 95110 },
  { rank: 3, name: "NovaBlaze", category: "Arcade", points: 93870 },
  { rank: 4, name: "Wintermute", category: "Puzzle", points: 91205 },
  { rank: 5, name: "Aarav.exe", category: "Racing", points: 89760 },
  { rank: 6, name: "PixelPhantom", category: "Arcade", points: 87990 },
  { rank: 7, name: "Simran_K", category: "Strategy", points: 86420 },
  { rank: 8, name: "DriftQueen", category: "Racing", points: 84310 },
  { rank: 9, name: "LogicLoop9", category: "Puzzle", points: 82750 },
  { rank: 10, name: "RohanV", category: "Arcade", points: 81020 },
];

const rankTone: Record<number, string> = {
  1: "text-brand-gold",
  2: "text-white",
  3: "text-brand-orange",
};

export default function LeaderboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Rankings"
        title="This week's top players"
        description="Rankings update in real time based on ranked match performance across all four arenas."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Leaderboard" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="glass overflow-hidden rounded-2xl">
            <div className="grid grid-cols-[3rem_1fr_6rem_6rem] gap-4 border-b border-white/8 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted sm:grid-cols-[3rem_1fr_8rem_8rem]">
              <span>Rank</span>
              <span>Player</span>
              <span className="hidden sm:block">Category</span>
              <span className="text-right">Points</span>
            </div>
            <ul>
              {players.map((p) => (
                <li
                  key={p.rank}
                  className="grid grid-cols-[3rem_1fr_6rem_6rem] items-center gap-4 border-b border-white/5 px-5 py-4 last:border-b-0 sm:grid-cols-[3rem_1fr_8rem_8rem]"
                >
                  <span
                    className={cn(
                      "flex items-center gap-1 font-display text-lg font-bold",
                      rankTone[p.rank] ?? "text-white/70",
                    )}
                  >
                    {p.rank <= 3 && <Crown size={16} aria-hidden />}
                    {p.rank}
                  </span>
                  <span className="font-semibold text-white">{p.name}</span>
                  <span className="hidden text-sm text-muted sm:block">
                    {p.category}
                  </span>
                  <span className="text-right text-sm font-semibold text-brand-gold">
                    {p.points.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Tournaments", href: "/tournaments", description: "Browse weekly cups and seasonal championships." },
          { label: "Games", href: "/games", description: "Browse all four game categories." },
          { label: "Rewards", href: "/rewards", description: "See what each reward tier unlocks." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Leaderboard", path: "/leaderboard" },
        ])}
      />
    </>
  );
}
