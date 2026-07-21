import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/faq";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about Daman Game (damangame) — Daman Login, accounts, matchmaking, tournaments, and rewards.",
  path: "/faq",
  keywords: ["Daman Game FAQ", "Daman Game Help", "Daman Game Questions"],
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Reach out to our support team anytime."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Accordion items={faqs} />
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Support", href: "/support", description: "Browse help center topics." },
          { label: "Contact", href: "/contact", description: "Reach the team directly." },
          { label: "Login", href: "/login", description: "Sign in to an existing account." },
          { label: "Register", href: "/register", description: "Create a free account." },
          { label: "Download", href: "/download", description: "How to access Daman Game." },
          { label: "Responsible Play", href: "/responsible-play", description: "Our approach to player wellbeing." },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
    </>
  );
}
