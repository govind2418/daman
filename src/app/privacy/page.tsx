import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Information",
  absoluteTitle: "Privacy Information | Daman Game Guide",
  description: "Privacy information for this independent Daman Game guide. This site does not provide account login or request game credentials.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <>
    <LegalLayout
      eyebrow="Website information"
      title="Privacy Information"
      lastUpdated="October 5, 2026"
      breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Information" }]} />}
      sections={[
        { heading: "1. This site is an information guide", body: ["This website does not provide Daman Game accounts, sign-in, registration, payment, or password recovery. Do not enter game credentials, verification codes, financial details, or identity documents on this site."] },
        { heading: "2. Information submitted through this site", body: ["The guide pages do not ask visitors for game-account details. Standard hosting and delivery services may process technical request information to serve and protect the website; consult the hosting provider's privacy materials for its handling of server logs."] },
        { heading: "3. External services", body: ["If you follow a link to another website, that service has its own privacy practices and terms. Check the destination and its privacy notice before submitting any information. This guide does not control third-party data handling."] },
        { heading: "4. Account data questions", body: ["Questions about an account or information held by a game operator must be directed to that operator through a contact channel you have independently verified. This guide cannot access, correct, or delete third-party account data."] },
        { heading: "5. Changes", body: ["This page may be updated when the website changes. It describes this information website only and is not the privacy notice of a game operator or any other third party."] },
      ]}
    />
    <RelatedLinks links={[
      { label: "Website Terms", href: "/terms", description: "Read the terms for using this information guide." },
      { label: "Daman Game Login", href: "/daman-game-login", description: "Review account-security guidance." },
      { label: "Responsible Play", href: "/responsible-play", description: "Read general safety information." },
    ]} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Privacy Information", path: "/privacy" }])} />
  </>;
}
