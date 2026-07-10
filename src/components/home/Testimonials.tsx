import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "The matchmaking is unreal — I'm always paired with players my level. Climbing the leaderboard actually feels earned.",
    name: "Aarav Mehta",
    role: "Diamond Rank, Racing",
  },
  {
    quote:
      "Support answered in under two minutes at 2am. Never had a platform care this much about the player experience.",
    name: "Simran Kaur",
    role: "Gold Rank, Strategy",
  },
  {
    quote:
      "Weekly tournaments keep things fresh. The reward system genuinely makes me want to log in every day.",
    name: "Rohan Verma",
    role: "Platinum Rank, Arcade",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <Container>
        <SectionHeading
          eyebrow="Player Stories"
          title={<span id="testimonials-heading">Loved by competitive players</span>}
          description="Real feedback from the Daman Game community."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <GlassCard key={name} as="article">
              <div className="flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-sm font-bold text-white"
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs text-muted">{role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
