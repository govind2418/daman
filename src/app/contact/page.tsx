import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/forms/ContactForm";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with the Daman Game team — support, press, partnerships, and careers.",
  path: "/contact",
});

const channels = [
  { icon: MessageCircle, title: "Live Chat", detail: "Available 24/7 in-app" },
  { icon: Mail, title: "Email", detail: "hello@damangame.co.in" },
  { icon: MapPin, title: "HQ", detail: "Bengaluru, India" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We're here to help"
        description="Questions about your account, a tournament, or a partnership? Send us a message."
        breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {channels.map(({ icon: Icon, title, detail }) => (
              <GlassCard key={title} as="article" className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                  <Icon size={20} className="text-brand-gold" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-sm text-muted">{detail}</p>
                </div>
              </GlassCard>
            ))}
          </div>

          <ContactForm />
        </Container>
      </section>

      <RelatedLinks
        links={[
          { label: "Support", href: "/support", description: "Browse help center topics." },
          { label: "FAQ", href: "/faq", description: "Answers to common questions." },
          { label: "About", href: "/about", description: "Our story and what we stand for." },
          { label: "Careers", href: "/careers", description: "See open roles on the team." },
          { label: "Press", href: "/press", description: "Media resources and recent coverage." },
          { label: "Responsible Play", href: "/responsible-play", description: "Our approach to player wellbeing." },
        ]}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
