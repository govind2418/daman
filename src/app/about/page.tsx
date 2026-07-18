import type { Metadata } from "next";
import { Target, ShieldCheck, Users, Rocket } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { IconCard } from "@/components/ui/IconCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Daman Game is on a mission to build the fairest, fastest competitive gaming platform for skilled players everywhere.",
  path: "/about",
});

const values = [
  {
    icon: ShieldCheck,
    title: "Fairness first",
    description:
      "Every ranked system we build starts with the question: does this reward skill? If not, we don't ship it.",
  },
  {
    icon: Rocket,
    title: "Built for speed",
    description:
      "From matchmaking to page loads, we obsess over shaving milliseconds — competitive players notice.",
  },
  {
    icon: Users,
    title: "Community-led",
    description:
      "Our roadmap is shaped by player feedback, seasonal surveys, and an active player council.",
  },
  {
    icon: Target,
    title: "Long-term focus",
    description:
      "We're building a platform players trust for years, not a quarter — sustainable growth over short-term hype.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Building the arena competitive players deserve"
        description="Daman Game started with a simple frustration: most gaming platforms reward spend over skill. We set out to build the opposite."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Founded by a small team of competitive players and engineers,
            Daman Game launched with one goal — a platform where
            matchmaking is fair, progress is transparent, and rewards are
            earned through skill. Today, hundreds of thousands of players
            compete across our four arenas every week.
          </p>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-surface/50 py-16">
        <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatCounter value={500000} suffix="+" label="Active Players" />
          <StatCounter value={4} label="Game Categories" />
          <StatCounter value={120} suffix="+" label="Team Members" />
          <StatCounter value={2023} label="Founded" />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              What we stand for
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon, title, description }) => (
              <IconCard key={title} icon={icon} title={title} description={description} headingLevel="h3" />
            ))}
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Careers", href: "/careers", description: "See open roles on the team." },
          { label: "Press", href: "/press", description: "Media resources and recent coverage." },
          { label: "Blog", href: "/blog", description: "Product updates and insights." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
