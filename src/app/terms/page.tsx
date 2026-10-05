import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website Terms",
  absoluteTitle: "Website Terms | Daman Game Guide",
  description: "Terms for using this independent Daman Game information website; these terms do not replace the game operator's own terms.",
  path: "/terms",
});

export default function TermsPage() {
  return <>
    <LegalLayout
      eyebrow="Website information"
      title="Website Terms"
      lastUpdated="October 5, 2026"
      breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Website Terms" }]} />}
      sections={[
        { heading: "1. Scope of this website", body: ["This website publishes general information about the Daman Game name and project artwork. It is not the game operator, an account portal, a payment service, or customer support for a third-party game."] },
        { heading: "2. Information may change", body: ["Game names, availability, rules, age limits, and service terms may change. Visual references and guide text on this site are not confirmation of current features. Check the relevant provider's verified materials for current information."] },
        { heading: "3. Third-party services", body: ["Links to external services, if present, lead outside this guide. The third-party provider controls its own service, account requirements, terms, privacy practices, and support. Review those materials and applicable local rules before proceeding."] },
        { heading: "4. Responsible use", body: ["Gaming can involve financial and personal risks. No result or income is guaranteed. Check local eligibility and restrictions, set limits, and do not use a game as a way to recover losses or meet essential expenses."] },
        { heading: "5. Contact and corrections", body: ["This guide does not offer account support. If information on this website appears inaccurate, verify it with the relevant provider before relying on it. These general website notes are not a substitute for legal advice or the operator's binding terms."] },
      ]}
    />
    <RelatedLinks links={[
      { label: "Privacy information", href: "/privacy", description: "Read how this information site handles website visits." },
      { label: "Responsible Play", href: "/responsible-play", description: "Review general safety and wellbeing guidance." },
      { label: "Daman Game", href: "/daman-game", description: "Return to the Daman Game overview." },
    ]} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Website Terms", path: "/terms" }])} />
  </>;
}
