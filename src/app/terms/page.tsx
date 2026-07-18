import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { JsonLd } from "@/components/shared/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms of Service for Daman Game.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <LegalLayout
        eyebrow="Legal"
        title="Terms of Service"
        lastUpdated="July 10, 2026"
        breadcrumbs={
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
        }
        sections={[
          {
            heading: "1. Acceptance of terms",
            body: [
              "By creating an account or using Daman Game, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
            ],
          },
          {
            heading: "2. Eligibility",
            body: [
              "You must be at least 18 years old to create an account. By registering, you confirm that you meet this requirement.",
            ],
          },
          {
            heading: "3. Skill-based platform",
            body: [
              "Daman Game is a skill-based competitive gaming platform. Outcomes are determined by player performance, not chance. There is no real-money wagering on the platform.",
            ],
          },
          {
            heading: "4. Account conduct",
            body: [
              "Cheating, use of unauthorized third-party tools, match-fixing, and harassment of other players are strictly prohibited and may result in suspension or termination of your account.",
            ],
          },
          {
            heading: "5. Rewards",
            body: [
              "Daman Points and in-platform rewards have no cash value and cannot be exchanged for real currency. Reward structures may be updated between seasons.",
            ],
          },
          {
            heading: "6. Changes to these terms",
            body: [
              "We may update these terms from time to time. Continued use of the platform after changes take effect constitutes acceptance of the updated terms.",
            ],
          },
          {
            heading: "7. Contact",
            body: [
              "Questions about these terms can be directed to our support team via the Contact page.",
            ],
          },
        ]}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
    </>
  );
}
