import type { Metadata } from "next";
import { UserCog, Trophy, CreditCard, ShieldAlert, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Daman Game help center — browse topics on accounts, tournaments, rewards, and account safety.",
};

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
            {topics.map(({ icon: Icon, title, description }) => (
              <GlassCard key={title} as="article">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                  <Icon size={20} className="text-brand-gold" aria-hidden />
                </div>
                <h2 className="mt-4 font-display text-lg font-bold text-white">
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
    </>
  );
}
