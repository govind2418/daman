import { ShieldCheck, Zap, Gift, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhoneMockup } from "@/components/home/PhoneMockup";
import { FloatingDecor } from "@/components/home/FloatingDecor";

const trustBadges = [
  { icon: ShieldCheck, label: "Fair Play" },
  { icon: Zap, label: "Instant Rewards" },
  { icon: Gift, label: "Daily Bonuses" },
  { icon: Headphones, label: "24/7 Support" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40 lg:pb-32">
      {/* neon background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand-red/25 animate-glow-pulse blur-[100px]" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-brand-orange/20 animate-glow-pulse blur-[110px] [animation-delay:1.5s]" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-brand-gold/10 blur-[100px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          preserveAspectRatio="none"
          viewBox="0 0 1000 700"
        >
          <path
            d="M-50 620 L 420 260 L 1050 40"
            stroke="url(#streak1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M-50 500 L 500 180 L 1050 -60"
            stroke="url(#streak2)"
            strokeWidth="1"
            fill="none"
          />
          <defs>
            <linearGradient id="streak1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF3B30" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF3B30" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streak2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF6A00" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFC857" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <span
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold"
          >
            Daman Game — India&rsquo;s Premium Skill-Gaming Arena
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-white">Play</span>{" "}
            <span className="text-gradient-fire">Fearless</span>
            <br />
            <span className="text-white">Rise</span>{" "}
            <span className="text-gradient-fire">Legendary</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-md animate-fade-up text-base leading-relaxed text-muted [animation-delay:0.2s] sm:text-lg lg:mx-0"
          >
            Join Daman Game to compete in premium tournaments, climb the
            global leaderboard, and unlock rewards built for serious
            players.
          </p>

          <div
            className="mx-auto mt-8 grid max-w-md animate-fade-up grid-cols-2 gap-3 [animation-delay:0.3s] sm:grid-cols-4 lg:mx-0"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center lg:items-start lg:text-left"
              >
                <Icon size={20} className="text-brand-red" aria-hidden />
                <span className="text-xs font-medium text-white/80">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="mt-8 flex animate-fade-up flex-col items-center gap-3 [animation-delay:0.4s] sm:flex-row lg:items-start lg:justify-start"
          >
            <Button
              href="/register"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} aria-hidden />}
            >
              Join the Arena
            </Button>
            <Button href="/games" variant="secondary" size="lg">
              Explore Games
            </Button>
            <Button href="/leaderboard" variant="outline" size="lg">
              View Leaderboard
            </Button>
          </div>
        </div>

        <div className="relative mx-auto flex animate-scale-in justify-center py-6 lg:py-0">
          <FloatingDecor />
          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}
