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
    "Answers about this Daman Game information website, its images, login guidance, app availability, and responsible use.",
  path: "/faq",
  keywords: ["Daman Game FAQ", "Daman Game Help", "Daman Game Questions"],
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Daman Game help"
        title="Frequently asked questions"
        description="Straightforward answers about this guide. It is not connected to the game operator and cannot provide account support."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Accordion items={faqs} />
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Daman Game", href: "/daman-game", description: "Read the general Daman Game overview." },
          { label: "Login Guide", href: "/daman-game-login", description: "Review safe account-access guidance." },
          { label: "App Guide", href: "/daman-game-app", description: "Check app availability and download safety." },
          { label: "Responsible Play", href: "/responsible-play", description: "Read general safety and wellbeing guidance." },
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
