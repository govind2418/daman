import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Daman Game.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <LegalLayout
        eyebrow="Legal"
        title="Privacy Policy"
        lastUpdated="July 10, 2026"
        breadcrumbs={
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        }
        sections={[
          {
            heading: "1. Information we collect",
            body: [
              "We collect account information (email, display name), gameplay data (match history, rankings), and basic device/usage data to operate and improve the platform.",
            ],
          },
          {
            heading: "2. How we use your information",
            body: [
              "Your information is used to provide matchmaking, maintain leaderboards, deliver rewards, provide customer support, and improve platform fairness and performance.",
            ],
          },
          {
            heading: "3. Data sharing",
            body: [
              "We do not sell your personal data. We may share limited data with service providers who help us operate the platform, under strict confidentiality agreements.",
            ],
          },
          {
            heading: "4. Data security",
            body: [
              "We use industry-standard security practices to protect your data, including encryption in transit and access controls on internal systems.",
            ],
          },
          {
            heading: "5. Your rights",
            body: [
              "You can request access to, correction of, or deletion of your personal data at any time by contacting our support team.",
            ],
          },
          {
            heading: "6. Contact",
            body: [
              "For privacy-related questions, reach out via our Contact page.",
            ],
          },
        ]}
      />
      <RelatedLinks
        links={[
          { label: "Terms of Service", href: "/terms", description: "Platform rules and account eligibility." },
          { label: "Responsible Play", href: "/responsible-play", description: "Our approach to player wellbeing." },
          { label: "Support", href: "/support", description: "Browse help center topics." },
          { label: "Contact", href: "/contact", description: "Reach the team directly." },
        ]}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
    </>
  );
}
