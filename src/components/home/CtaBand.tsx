import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-red/15 via-background to-brand-orange/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/20 blur-[110px]"
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Your rank is waiting. <span className="text-gradient-fire">Claim it.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted sm:text-lg">
          Create your free account in under a minute and jump into your first
          match today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href="/register"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} aria-hidden />}
          >
            Create Free Account
          </Button>
          <Button href="/games" variant="outline" size="lg">
            Browse Games
          </Button>
        </div>
      </Container>
    </section>
  );
}
