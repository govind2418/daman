import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";

export type RelatedLink = { label: string; href: string; description: string };

export function RelatedLinks({
  id,
  heading = "Explore more",
  links,
}: {
  id?: string;
  heading?: string;
  links: RelatedLink[];
}) {
  return (
    <section
      id={id}
      className="border-t border-white/5 py-16 sm:py-20"
      aria-labelledby="related-links-heading"
    >
      <Container className="max-w-4xl">
        <h2
          id="related-links-heading"
          className="text-center font-display text-2xl font-bold text-white sm:text-3xl"
        >
          {heading}
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <GlassCard className="h-full">
                <span className="flex items-center justify-between font-display text-base font-bold text-white">
                  {link.label}
                  <ArrowRight size={16} aria-hidden className="shrink-0 text-brand-gold" />
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {link.description}
                </p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
