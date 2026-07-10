import { ShieldCheck, Zap, Gift, Headphones } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Fair Play Guarantee",
    description:
      "Every match runs on verified, tamper-proof systems with independent audits — so every win is earned.",
  },
  {
    icon: Zap,
    title: "Lightning Matchmaking",
    description:
      "Sub-second matchmaking pairs you with players at your skill level, no queues, no waiting.",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description:
      "Unlock daily challenges, seasonal badges, and premium cosmetics as you climb the ranks.",
  },
  {
    icon: Headphones,
    title: "24/7 Player Support",
    description:
      "A dedicated support team is always on, ready to help across chat, email, and in-app.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="features-heading">
      <Container>
        <SectionHeading
          eyebrow="Why Daman Game"
          title={
            <span id="features-heading">
              Built for players who play to win
            </span>
          }
          description="A premium arena engineered around fairness, speed, and rewards that actually matter."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <GlassCard key={title} as="article">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                <Icon size={22} className="text-brand-gold" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
