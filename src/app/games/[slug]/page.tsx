import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Users, ArrowRight, Trophy } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { gameCategories, getGameCategory } from "@/lib/games";

export function generateStaticParams() {
  return gameCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getGameCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `${category.description} Join ${category.players} active players in the ${category.name} arena.`,
  };
}

export default async function GameCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getGameCategory(slug);
  if (!category) notFound();

  return (
    <>
      <PageHero
        eyebrow={category.tagline}
        title={category.name}
        description={category.description}
      >
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/register" variant="primary" size="lg" icon={<ArrowRight size={18} aria-hidden />}>
            Play {category.name}
          </Button>
          <Button href="/leaderboard" variant="outline" size="lg">
            View Leaderboard
          </Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex items-center justify-center gap-2 text-sm text-muted">
            <Users size={16} className="text-brand-red" aria-hidden />
            {category.players} players competing in {category.name}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {category.titles.map((title) => (
              <GlassCard key={title.name} as="article">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                  <Trophy size={18} className="text-brand-gold" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {title.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  {title.mode}
                </p>
                <p className="mt-3 text-sm text-muted">
                  {title.players} players this week
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
