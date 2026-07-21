import type { Metadata } from "next";
import { UserCog, Trophy, CreditCard, ShieldAlert, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { IconCard } from "@/components/ui/IconCard";
import { Button } from "@/components/ui/Button";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description:
    "Daman Game help center — browse topics on accounts, tournaments, rewards, and account safety.",
  path: "/support",
});

const topics = [
  {
    icon: UserCog,
    title: "Account & Profile",
    description: "Manage your profile, linked devices, and account settings.",
  },
  {
    icon: Trophy,
    title: "Tournaments & Matches",
    description: "Registration, brackets, disputes, and match history.",
  },
  {
    icon: CreditCard,
    title: "Rewards & Points",
    description: "How Daman Points are earned, tracked, and redeemed.",
  },
  {
    icon: ShieldAlert,
    title: "Safety & Fair Play",
    description: "Report cheating, harassment, or account security concerns.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title="How can we help?"
        description="Browse common topics below, or contact our team directly for anything else."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Support" }]} />}
      >
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} aria-hidden />}>
            Contact Support
          </Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {topics.map(({ icon, title, description }) => (
              <IconCard key={title} icon={icon} title={title} description={description} headingLevel="h2" />
            ))}
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "FAQ", href: "/faq", description: "Answers to common questions." },
          { label: "Contact", href: "/contact", description: "Reach the team directly." },
          { label: "Responsible Play", href: "/responsible-play", description: "Our approach to player wellbeing." },
          { label: "Login", href: "/login", description: "Sign in to an existing account." },
          { label: "Register", href: "/register", description: "Create a free account." },
          { label: "Rewards", href: "/rewards", description: "View reward tiers and perks." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Support", path: "/support" },
        ])}
      />
    </>
  );
}
