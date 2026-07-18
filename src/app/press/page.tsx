import type { Metadata } from "next";
import { Download, Newspaper } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Press",
  description:
    "Media resources, brand assets, and recent coverage for Daman Game.",
  path: "/press",
});

const mentions = [
  { outlet: "GameWire Daily", headline: "Daman Game crosses 500K ranked players in under two years", date: "Jun 2026" },
  { outlet: "Esports Pulse", headline: "How Daman Game's matchmaking model is winning over competitive players", date: "Apr 2026" },
  { outlet: "TechArena", headline: "Inside the fairness-first approach reshaping skill gaming", date: "Jan 2026" },
];

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="Press"
        title="Media resources & recent coverage"
        description="For interviews, brand assets, or press inquiries, reach our media team directly."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Press" }]} />}
      >
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="primary" size="lg" icon={<Download size={18} aria-hidden />}>
            Download Press Kit
          </Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white">
            In the news
          </h2>
          <div className="mt-6 space-y-4">
            {mentions.map((m) => (
              <GlassCard key={m.headline} as="article" className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                  <Newspaper size={18} className="text-brand-gold" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    {m.outlet} · {m.date}
                  </p>
                  <h3 className="mt-1 font-semibold text-white">{m.headline}</h3>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "About", href: "/about", description: "Our story and what we stand for." },
          { label: "Careers", href: "/careers", description: "See open roles on the team." },
          { label: "Blog", href: "/blog", description: "Product updates and insights." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Press", path: "/press" },
        ])}
      />
    </>
  );
}
