import { Users, Trophy, ShieldCheck, Headphones } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";

const stats = [
  { icon: Users, value: 500000, suffix: "+", label: "Active Players" },
  { icon: Trophy, value: 10, suffix: "M+", label: "Matches Played" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Fair Play" },
];

export function StatsSection() {
  return (
    <section className="border-y border-white/5 bg-surface/50 py-16">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map(({ icon: Icon, value, suffix, label }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <Icon size={22} className="text-brand-red" aria-hidden />
            <StatCounter value={value} suffix={suffix} label={label} />
          </div>
        ))}
        <div className="flex flex-col items-center gap-3">
          <Headphones size={22} className="text-brand-red" aria-hidden />
          <div className="text-center">
            <p className="font-display text-4xl font-extrabold text-gradient-fire sm:text-5xl">
              24/7
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-muted">
              Support
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
