import type { Metadata } from "next";
import { Calendar, Users, Trophy, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Tournaments",
  description:
    "Browse upcoming Daman Game tournaments across Arcade, Strategy, Racing, and Puzzle — register for bracket and leaderboard formats.",
};

const tournaments = [
  {
    name: "Season 4 Championship",
    category: "Racing",
    format: "16-Player Bracket",
    date: "Jul 28, 2026",
    entrants: "12,480",
    reward: "Champion Badge + 50,000 Daman Points",
    status: "Registering",
  },
  {
    name: "Weekly Strategy Cup",
    category: "Strategy",
    format: "Swiss Rounds",
    date: "Every Friday",
    entrants: "6,200",
    reward: "Top 100 Points Airdrop",
    status: "Open",
  },
  {
    name: "Puzzle Rush Sprint",
    category: "Puzzle",
    format: "Speed Solve Ladder",
    date: "Jul 15, 2026",
    entrants: "4,850",
    reward: "Exclusive Cosmetic Set",
    status: "Registering",
  },
  {
    name: "Arcade Blitz Series",
    category: "Arcade",
    format: "8-Player Bracket",
    date: "Jul 20, 2026",
    entrants: "9,100",
    reward: "Rank Boost + Badge",
    status: "Open",
  },
];

export default function TournamentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Compete"
        title="Tournaments built for serious climbers"
        description="Weekly cups, seasonal championships, and bracket series — all with transparent formats and fair matchmaking."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {tournaments.map((t) => (
              <GlassCard key={t.name} as="article">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge>{t.category}</Badge>
                    <h2 className="mt-3 font-display text-xl font-bold text-white">
                      {t.name}
                    </h2>
                  </div>
                  <span
                    className={
                      t.status === "Open"
                        ? "rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400"
                        : "rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-semibold text-brand-gold"
                    }
                  >
                    {t.status}
                  </span>
                </div>

                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
                      <Calendar size={14} aria-hidden /> Date
                    </dt>
                    <dd className="mt-1 font-medium text-white">{t.date}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
                      <Users size={14} aria-hidden /> Entrants
                    </dt>
                    <dd className="mt-1 font-medium text-white">{t.entrants}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
                      <Trophy size={14} aria-hidden /> Format
                    </dt>
                    <dd className="mt-1 font-medium text-white">{t.format}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">
                      Reward
                    </dt>
                    <dd className="mt-1 font-medium text-brand-gold">{t.reward}</dd>
                  </div>
                </dl>

                <Button
                  href="/register"
                  variant="secondary"
                  size="sm"
                  className="mt-6 w-full justify-center"
                  icon={<ArrowRight size={16} aria-hidden />}
                >
                  Register Now
                </Button>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
