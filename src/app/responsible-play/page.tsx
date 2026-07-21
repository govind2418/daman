import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Responsible Play",
  description:
    "Daman Game's commitment to responsible, healthy, skill-based competitive gaming.",
  path: "/responsible-play",
});

export default function ResponsiblePlayPage() {
  return (
    <>
      <LegalLayout
        eyebrow="Player Wellbeing"
        title="Responsible Play"
        lastUpdated="July 10, 2026"
        breadcrumbs={
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Responsible Play" }]} />
        }
        sections={[
          {
            heading: "Our approach",
            body: [
              "Daman Game is built as a skill-based competitive platform — not a gambling product. There is no real-money wagering anywhere on the platform, and rewards are earned exclusively through gameplay performance.",
            ],
          },
          {
            heading: "Age requirement",
            body: [
              "Accounts are restricted to players 18 years of age or older, in line with our Terms of Service.",
            ],
          },
          {
            heading: "Healthy play tools",
            body: [
              "Your account settings include optional session-time reminders and the ability to self-restrict daily play time if you'd like to manage how much time you spend on the platform.",
            ],
          },
          {
            heading: "Getting support",
            body: [
              "If you have concerns about your own play habits or those of someone you know, our support team can help point you to appropriate resources — reach out anytime via the Contact page.",
            ],
          },
        ]}
      />
      <RelatedLinks
        links={[
          { label: "Support", href: "/support", description: "Browse help center topics." },
          { label: "Contact", href: "/contact", description: "Reach the team directly." },
          { label: "Terms of Service", href: "/terms", description: "Platform rules and account eligibility." },
          { label: "Privacy Policy", href: "/privacy", description: "How your account data is handled." },
        ]}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Responsible Play", path: "/responsible-play" },
        ])}
      />
    </>
  );
}
