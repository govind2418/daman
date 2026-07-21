import type { Metadata } from "next";
import { AuthLayout } from "@/components/shared/AuthLayout";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { TableOfContents } from "@/components/shared/TableOfContents";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Accordion } from "@/components/ui/Accordion";
import { registerFaqs } from "@/lib/faq";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Register",
  description:
    "Create your free Daman Game account in under a minute — already registered? Head to Daman Login instead.",
  path: "/register",
});

const requirements = [
  {
    title: "Display name",
    description: "The name shown on your profile and leaderboard entries.",
  },
  {
    title: "Email address",
    description: "Used to sign in and for account-related communication.",
  },
  {
    title: "Password",
    description: "At least 8 characters long.",
  },
  {
    title: "Age confirmation",
    description:
      "You must confirm you are 18 years of age or older and agree to the Terms of Service and Privacy Policy.",
  },
];

export default function RegisterPage() {
  return (
    <>
      <AuthLayout
        title="Join Daman Game"
        description="Create your free Daman Game account in under a minute and jump into your first ranked match today."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Register" }]} />}
      >
        <RegisterForm />
      </AuthLayout>

      <TableOfContents
        items={[
          { label: "Account Requirements", href: "#account-requirements" },
          { label: "After You Register", href: "#after-you-register" },
          { label: "Registration FAQ", href: "#registration-faq" },
        ]}
      />

      <section id="account-requirements" className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Account Requirements"
            title="What you need to register"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {requirements.map(({ title, description }) => (
              <GlassCard key={title} as="article">
                <h2 className="font-display text-base font-bold text-white">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="after-you-register" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
            After you register
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Once your account is created, you can browse game categories,
            view tournaments, check the leaderboard, and track your Daman
            Points in the Rewards section.
          </p>
        </Container>
      </section>

      <section id="registration-faq" className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Registration FAQ" title="Common registration questions" />
          <div className="mt-10">
            <Accordion items={registerFaqs} />
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Login", href: "/login", description: "Sign in to an existing account." },
          { label: "Games", href: "/games", description: "Browse all four game categories." },
          { label: "Rewards", href: "/rewards", description: "View reward tiers and perks." },
          { label: "Tournaments", href: "/tournaments", description: "Browse weekly cups and seasonal championships." },
          { label: "FAQ", href: "/faq", description: "Answers to common questions." },
          { label: "Responsible Play", href: "/responsible-play", description: "Our approach to player wellbeing." },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: registerFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Register", path: "/register" },
        ])}
      />
    </>
  );
}
