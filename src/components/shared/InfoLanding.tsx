import Image from "next/image";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { RelatedLinks, type RelatedLink } from "@/components/shared/RelatedLinks";
import { TableOfContents } from "@/components/shared/TableOfContents";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { breadcrumbJsonLd } from "@/lib/seo";

type InfoSection = { id: string; title: string; paragraphs: string[]; bullets?: string[] };

export function InfoLanding({
  title,
  eyebrow,
  description,
  path,
  image,
  imageAlt,
  sections,
  faqs,
  links,
}: {
  title: string;
  eyebrow: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
  sections: InfoSection[];
  faqs: AccordionItem[];
  links: RelatedLink[];
}) {
  const crumbs = [{ label: "Home", href: "/" }, { label: title }];
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={<Breadcrumbs items={crumbs} />}
      />
      <section className="pb-10">
        <Container className="max-w-4xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-white/10 bg-black/20 sm:rounded-3xl">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
          </div>
        </Container>
      </section>
      <TableOfContents items={[
        ...sections.map(({ id, title: sectionTitle }) => ({ label: sectionTitle, href: `#${id}` })),
        { label: "Frequently asked questions", href: "#common-questions" },
      ]} />
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={index % 2 ? "border-y border-white/5 bg-surface/50 py-14 sm:py-20" : "py-14 sm:py-20"}>
          <Container className="max-w-3xl">
            <SectionHeading align="left" eyebrow={eyebrow} title={section.title} />
            <div className="mt-6 space-y-4">
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>)}
            </div>
            {section.bullets && <ul className="mt-6 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />{bullet}</li>)}</ul>}
          </Container>
        </section>
      ))}
      <section id="common-questions" className="border-y border-white/5 bg-surface/50 py-14 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`Common questions about ${title}`} />
          <div className="mt-9"><Accordion items={faqs} /></div>
        </Container>
      </section>
      <RelatedLinks heading="Related Daman Game guides" links={links} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: title, path }])} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      }} />
    </>
  );
}
