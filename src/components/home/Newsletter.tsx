import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="glass border-glow rounded-3xl px-6 py-12 text-center sm:px-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
            <Mail size={22} className="text-brand-gold" aria-hidden />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
            Get tournament alerts &amp; reward drops
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Join the newsletter for early access to seasonal tournaments and
            limited-time rewards. No spam, unsubscribe anytime.
          </p>
          <form className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-orange focus:outline-none"
            />
            <Button type="submit" variant="primary" size="md" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
