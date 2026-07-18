import type { ReactNode } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";

export type LegalSection = {
  heading: string;
  body: string[];
};

export function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  sections,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  breadcrumbs?: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={`Last updated ${lastUpdated}`}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-bold text-white">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
