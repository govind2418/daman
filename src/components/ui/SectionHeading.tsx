import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-block rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </span>
      )}
      <div className="relative">
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-6 -z-10 h-32 w-56 rounded-full bg-gradient-to-r from-brand-red/25 via-brand-orange/20 to-brand-gold/15 blur-[50px] sm:h-40 sm:w-72",
            align === "center" ? "left-1/2 -translate-x-1/2" : "left-0",
          )}
        />
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
