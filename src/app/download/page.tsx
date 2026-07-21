import type { Metadata } from "next";
import { Globe, MonitorSmartphone, Wifi } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { TableOfContents } from "@/components/shared/TableOfContents";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/ui/IconCard";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { downloadFaqs } from "@/lib/faq";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Download",
  description:
    "How to access Daman Game — no download or installation required. Play directly from a web browser at damangame.co.in.",
  path: "/download",
});

const accessPoints = [
  {
    icon: Globe,
    title: "No installation required",
    description:
      "Daman Game runs directly in your web browser at damangame.co.in. There is nothing to download or install.",
  },
  {
    icon: MonitorSmartphone,
    title: "Works on desktop and mobile browsers",
    description:
      "Use any device with a modern, up-to-date web browser, including Chrome, Safari, Firefox, or Edge.",
  },
  {
    icon: Wifi,
    title: "Internet connection",
    description:
      "A stable internet connection is recommended for the best experience, as with any web application.",
  },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Access"
        title="Accessing Daman Game"
        description="Daman Game is a web-based platform — there's no app to download or install."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Download" }]} />}
      >
        <div className="mt-8 flex justify-center">
          <Button href="/register" variant="primary" size="lg">
            Create an Account
          </Button>
        </div>
      </PageHero>

      <TableOfContents
        items={[
          { label: "How to Access", href: "#how-to-access" },
          { label: "Download FAQ", href: "#download-faq" },
        ]}
      />

      <section id="how-to-access" className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How to Access" title="Getting started on the web" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {accessPoints.map(({ icon, title, description }) => (
              <IconCard key={title} icon={icon} title={title} description={description} headingLevel="h3" />
            ))}
          </div>
        </Container>
      </section>

      <section id="download-faq" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Download FAQ" title="Common access questions" />
          <div className="mt-10">
            <Accordion items={downloadFaqs} />
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Register", href: "/register", description: "Create a free account." },
          { label: "Login", href: "/login", description: "Sign in to an existing account." },
          { label: "Support", href: "/support", description: "Browse help center topics." },
          { label: "FAQ", href: "/faq", description: "Answers to common questions." },
          { label: "Games", href: "/games", description: "Browse all four game categories." },
          { label: "Contact", href: "/contact", description: "Reach the team directly." },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: downloadFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Download", path: "/download" },
        ])}
      />
    </>
  );
}
