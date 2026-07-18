import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-16 pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-brand-red/25 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-brand-orange/20 blur-[90px]"
      />
      <Container className="relative text-center">
        {breadcrumbs && <div className="mb-5">{breadcrumbs}</div>}
        <span className="inline-block rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {eyebrow}
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
