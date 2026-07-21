import type { Metadata } from "next";
import { AuthLayout } from "@/components/shared/AuthLayout";
import { LoginForm } from "@/components/forms/LoginForm";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { TableOfContents } from "@/components/shared/TableOfContents";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Accordion } from "@/components/ui/Accordion";
import { loginFaqs } from "@/lib/faq";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Daman Login",
  absoluteTitle: "Daman Game Login | Daman Login to damangame.co.in",
  description:
    "Daman Login — sign in to your Daman Game account to compete, climb the leaderboard, and unlock rewards on damangame.co.in.",
  path: "/login",
  keywords: ["Daman Login App", "Daman Game Sign In", "Daman Game Account"],
});

export default function LoginPage() {
  return (
    <>
      <AuthLayout
        title="Daman Game Login"
        description="Daman Login to pick up your rank, tournaments, and rewards right where you left off on Daman Game."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Login" }]} />}
      >
        <LoginForm />
      </AuthLayout>

      <TableOfContents
        items={[
          { label: "How It Works", href: "#how-it-works" },
          { label: "Trouble Logging In", href: "#help" },
          { label: "Login FAQ", href: "#login-faq" },
        ]}
      />

      <section id="how-it-works" className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="How It Works"
            title="Logging in to Daman Game"
            description="Sign in with the email and password you used when you registered."
          />

          <ol className="mt-8 space-y-4">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-red/20 to-brand-orange/20 font-display text-sm font-bold text-brand-gold">
                1
              </span>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Go to the Login page.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-red/20 to-brand-orange/20 font-display text-sm font-bold text-brand-gold">
                2
              </span>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Enter your registered email address and password.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-red/20 to-brand-orange/20 font-display text-sm font-bold text-brand-gold">
                3
              </span>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Select Log In.
              </p>
            </li>
          </ol>
        </Container>
      </section>

      <section id="help" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <GlassCard as="article">
              <h2 className="font-display text-lg font-bold text-white">
                Trouble logging in?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Check that your email and password are entered correctly,
                including capitalization. If you&rsquo;ve forgotten your
                password, use the &ldquo;Forgot password?&rdquo; link on this
                page, which will direct you to Contact so our team can help
                you regain access.
              </p>
            </GlassCard>
            <GlassCard as="article">
              <h2 className="font-display text-lg font-bold text-white">
                Account security tips
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Use a password you don&rsquo;t reuse on other sites, avoid
                sharing your login details with anyone, and log out when
                using a shared or public device.
              </p>
            </GlassCard>
          </div>
        </Container>
      </section>

      <section id="login-faq" className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Login FAQ" title="Common login questions" />
          <div className="mt-10">
            <Accordion items={loginFaqs} />
          </div>
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Register", href: "/register", description: "Create a free account." },
          { label: "Download", href: "/download", description: "How to access Daman Game." },
          { label: "Support", href: "/support", description: "Browse help center topics." },
          { label: "FAQ", href: "/faq", description: "Answers to common questions." },
          { label: "Contact", href: "/contact", description: "Reach the team directly." },
          { label: "Games", href: "/games", description: "Browse all four game categories." },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: loginFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Login", path: "/login" },
        ])}
      />
    </>
  );
}
