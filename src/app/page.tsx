import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqPreview } from "@/components/home/FaqPreview";
import { Newsletter } from "@/components/home/Newsletter";
import { CtaBand } from "@/components/home/CtaBand";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

const homeTitle = "Daman Game — Daman Login, Tournaments & Rewards";
const homeDescription =
  "Daman Game (damangame) is India's premium skill-based gaming arena. Daman Login to compete in tournaments, climb the leaderboard, and unlock rewards on Daman Game.";

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "",
  ogTitle: homeTitle,
});

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            What is Daman Game?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Daman Game, also searched as damangame, is a premium skill-based
            gaming arena where players compete in ranked matches and
            tournaments across arcade, strategy, racing, and puzzle titles.
            Every result on Daman Game is decided by player skill — there is
            no real-money wagering anywhere on the platform.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand-gold hover:underline"
            >
              Daman Login
            </Link>{" "}
            to jump back into the arena, or{" "}
            <Link
              href="/register"
              className="font-semibold text-brand-gold hover:underline"
            >
              create a free Daman Game account
            </Link>{" "}
            to get started today.
          </p>
        </Container>
      </section>
      <StatsSection />
      <Testimonials />
      <FaqPreview />
      <Newsletter />
      <CtaBand />
    </>
  );
}
