import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Join the team building Daman Game — open roles in engineering, design, and player operations.",
  path: "/careers",
});

const roles = [
  { title: "Senior Frontend Engineer", team: "Platform", location: "Remote", type: "Full-time" },
  { title: "Matchmaking Systems Engineer", team: "Infrastructure", location: "Bengaluru, IN", type: "Full-time" },
  { title: "Product Designer, Growth", team: "Design", location: "Remote", type: "Full-time" },
  { title: "Community & Player Ops Lead", team: "Community", location: "Bengaluru, IN", type: "Full-time" },
  { title: "Data Analyst, Ranked Systems", team: "Data", location: "Remote", type: "Contract" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Us"
        title="Help build the fairest arena in gaming"
        description="We're a small, focused team solving hard problems in matchmaking, fairness, and player experience."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {roles.map((role) => (
              <GlassCard key={role.title} as="article" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Badge>{role.team}</Badge>
                  <h2 className="mt-3 font-display text-lg font-bold text-white">
                    {role.title}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} aria-hidden /> {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} aria-hidden /> {role.type}
                    </span>
                  </div>
                </div>
                <Button href="/contact" variant="outline" size="sm" icon={<ArrowRight size={16} aria-hidden />}>
                  Apply
                </Button>
              </GlassCard>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Don&rsquo;t see the right role?{" "}
            <Link href="/contact" className="font-semibold text-brand-gold hover:underline">
              Reach out anyway
            </Link>{" "}
            — we&rsquo;re always looking for great people.
          </p>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "About", href: "/about", description: "Our story and what we stand for." },
          { label: "Press", href: "/press", description: "Media resources and recent coverage." },
          { label: "Contact", href: "/contact", description: "Reach the team directly." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ])}
      />
    </>
  );
}
