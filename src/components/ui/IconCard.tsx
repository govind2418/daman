import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function IconCard({
  icon: Icon,
  title,
  description,
  headingLevel: Heading = "h3",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <GlassCard as="article">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
        <Icon size={20} className="text-brand-gold" aria-hidden />
      </div>
      <Heading className="mt-4 font-display text-lg font-bold text-white">
        {title}
      </Heading>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </GlassCard>
  );
}
