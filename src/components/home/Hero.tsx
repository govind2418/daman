import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative pt-18">
      <div className="relative aspect-[1536/1024] w-full overflow-hidden">
        <Image
          src="/images/daman-game-hero.jpg"
          alt="Daman Game — Play More, Win More. Enjoy premium games and exclusive rewards with instant deposit, safe & secure play, daily bonus, refer & earn, and 24x7 support. Featured games: Aviator, Win Go, Slots, Casino, Fishing."
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative overflow-hidden pb-20 pt-14 sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand-red/15 blur-[100px]" />
          <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-brand-orange/10 blur-[110px]" />
        </div>

        <Container className="max-w-3xl text-center">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            damangame.co.in
          </span>

          <h1 className="mt-6 animate-fade-up font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl [animation-delay:0.1s]">
            Daman Game
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-muted [animation-delay:0.2s] sm:text-lg">
            Daman Game is a gaming platform where registered players compete in
            ranked matches and tournaments, track their position on a
            leaderboard, and earn Daman Points through gameplay.
          </p>

          <div className="mt-8 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:0.3s] sm:flex-row">
            <Button href="/login" variant="outline" size="lg">
              Log In
            </Button>
            <Button
              href="/register"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} aria-hidden />}
            >
              Register
            </Button>
            <Button href="/games" variant="secondary" size="lg">
              Browse Games
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
