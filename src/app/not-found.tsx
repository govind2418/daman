import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/20 blur-[110px]" />
      </div>
      <Container className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
          <Compass size={28} className="text-brand-gold" aria-hidden />
        </div>
        <p className="mt-6 font-display text-7xl font-extrabold text-gradient-fire sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
          This arena doesn&rsquo;t exist
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted sm:text-base">
          The page you&rsquo;re looking for may have moved or never existed.
          Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="md">
            Back to Home
          </Button>
          <Button href="/games" variant="outline" size="md">
            Browse Games
          </Button>
        </div>
      </Container>
    </section>
  );
}
