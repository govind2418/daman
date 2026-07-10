import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/faq";

export function FaqPreview() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Support"
          title={<span id="faq-heading">Frequently asked questions</span>}
          description="Everything you need to know before you jump in."
        />

        <div className="mt-12">
          <Accordion items={faqs.slice(0, 4)} />
        </div>

        <div className="mt-8 text-center">
          <Button href="/faq" variant="outline" size="md">
            View all FAQs
          </Button>
        </div>
      </Container>
    </section>
  );
}
