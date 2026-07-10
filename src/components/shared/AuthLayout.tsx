import type { ReactNode } from "react";
import { ShieldCheck, Zap, Trophy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const highlights = [
  { icon: ShieldCheck, text: "Verified fair-play matchmaking" },
  { icon: Zap, text: "Instant access to ranked queues" },
  { icon: Trophy, text: "Track progress across every arena" },
];

export function AuthLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand-red/20 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-orange/15 blur-[100px]" />
      </div>

      <Container className="grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Logo className="mb-8" />
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white">
            {title}
          </h1>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            {description}
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-white/80">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                  <Icon size={16} className="text-brand-gold" aria-hidden />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass border-glow mx-auto w-full max-w-md rounded-3xl p-7 sm:p-9">
          <div className="mb-6 text-center lg:hidden">
            <Logo className="justify-center" />
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
