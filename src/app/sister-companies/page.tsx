import type { Metadata } from "next";
import { ArrowUpRight, Gamepad2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Sister Companies",
  description:
    "Daman Game is part of a wider family of skill-gaming platforms. Discover our sister company 6club.",
};

const sisterCompanies = [
  {
    name: "6club",
    url: "https://sixclub.in",
    description:
      "6club is a sister platform in the Daman Game family, offering its own lineup of skill-based games, tournaments, and rewards for competitive players.",
  },
  {
    name: "Sikkim Game",
    url: "https://sikkimgame.co.in",
    description:
      "Sikkim Game is a sister platform in the Daman Game family, offering its own lineup of skill-based games, tournaments, and rewards for competitive players.",
  },
  {
    name: "Lottery 7",
    url: "https://7lottery.in.net",
    description:
      "Lottery 7 is a sister platform in the Daman Game family, offering its own lineup of skill-based games, tournaments, and rewards for competitive players.",
  },
];

export default function SisterCompaniesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Family"
        title="Sister companies"
        description="Daman Game is proud to be part of a group of platforms built around fair, skill-based competitive gaming."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <div className="grid gap-6">
            {sisterCompanies.map((company) => (
              <GlassCard key={company.name} as="article" className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                  <Gamepad2 size={20} className="text-brand-gold" aria-hidden />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-white">
                    {company.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {company.description}
                  </p>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold transition-colors hover:text-white"
                  >
                    Visit {company.name}
                    <ArrowUpRight size={16} aria-hidden />
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
