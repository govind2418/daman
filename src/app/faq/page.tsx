import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Daman Game — accounts, matchmaking, tournaments, and rewards.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently asked questions"
        description="Can't find what you're looking for? Reach out to our support team anytime."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Accordion items={faqs} />
        </Container>
      </section>
    </>
  );
}
