import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AppWindow, CircleHelp, Gamepad2, LogIn } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TableOfContents } from "@/components/shared/TableOfContents";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { ScreenshotGallery } from "@/components/home/ScreenshotGallery";
import { pageMetadata } from "@/lib/seo";

const title = "Daman Game: Game, Login and App Guide";
const description = "Explore the Daman Game guide, see the game names shown in the supplied Daman visuals, and find clear information about login and app access.";

export const metadata: Metadata = pageMetadata({
  title,
  absoluteTitle: "Daman Game | Login, App & Game Guide",
  description,
  path: "",
  keywords: ["Daman Game", "Daman Game Login", "Daman Game App", "Damangame", "Daman Game Guide"],
});

const guides = [
  {
    href: "/daman-game",
    title: "Daman Game overview",
    description: "A straightforward guide to the Daman Game brand, the names shown in the existing artwork, and the pages available on this site.",
    icon: Gamepad2,
  },
  {
    href: "/daman-game-login",
    title: "Daman Game login guide",
    description: "Read account-access and security guidance before visiting any third-party login page.",
    icon: LogIn,
  },
  {
    href: "/daman-game-app",
    title: "Daman Game app guide",
    description: "Learn what this website can confirm about app access and how to avoid unverified downloads.",
    icon: AppWindow,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative pt-18">
        <div className="relative aspect-[1536/1024] w-full overflow-hidden">
          <Image
            src="/images/daman-game-hero.jpg"
            alt="Daman Game promotional artwork with a mobile interface and game-category graphics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background" />
            <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand-red/15 blur-[100px]" />
            <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-brand-orange/10 blur-[110px]" />
          </div>
          <Container className="max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Daman Game information
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Daman Game, Login &amp; App Guide
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Find clear, practical information about Daman Game in one place. This website is an informational guide; it does not operate games, process accounts, or provide an app download.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/daman-game-login" variant="primary" size="lg" icon={<ArrowRight size={18} aria-hidden />}>
                Login information
              </Button>
              <Button href="/daman-game-app" variant="outline" size="lg">
                App information
              </Button>
            </div>
          </Container>
        </div>
      </section>

      <TableOfContents items={[
        { label: "About Daman Game", href: "#about-daman-game" },
        { label: "Game names in the artwork", href: "#game-names" },
        { label: "Login and app guides", href: "#guides" },
        { label: "Existing screenshots", href: "#screenshots" },
        { label: "Safety and eligibility", href: "#safety" },
      ]} />

      <section id="about-daman-game" className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Daman Game" title="A clear starting point for Daman Game searches" align="left" />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            People search for Daman Game, Daman login, and Daman Game app when looking for information about the Daman-branded gaming experience. This guide brings those topics together and explains what is—and is not—available on this website. It is not an account portal and does not claim to be the game operator.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Start with the <Link className="font-semibold text-brand-gold hover:underline" href="/daman-game">Daman Game overview</Link>, read the <Link className="font-semibold text-brand-gold hover:underline" href="/daman-game-login">Daman Game login guide</Link>, or check the <Link className="font-semibold text-brand-gold hover:underline" href="/daman-game-app">Daman Game app guide</Link>. Each page uses distinct, plain-language information rather than tournament schedules or invented player statistics.
          </p>
        </Container>
      </section>

      <section id="game-names" className="border-y border-white/5 bg-surface/50 py-14 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Game names" title="Names visible in the existing Daman artwork" align="left" />
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            The supplied Daman Game promotional artwork displays the names Win Go, Aviator, Slots, Casino, and Fishing. These are labels visible in that image, not a verified catalogue or a promise that every title is currently available. Check the operator’s current information for the actual games, rules, and availability in your location.
          </p>
          <div className="mt-7 flex flex-wrap gap-2" aria-label="Game names shown in the artwork">
            {["Win Go", "Aviator", "Slots", "Casino", "Fishing"].map((name) => (
              <span key={name} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85">{name}</span>
            ))}
          </div>
        </Container>
      </section>

      <section id="guides" className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Explore" title="Daman Game guides" description="Choose the page that matches what you are looking for." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {guides.map(({ href, title: cardTitle, description: cardDescription, icon: Icon }) => (
              <Link key={href} href={href} className="group">
                <GlassCard className="h-full transition-colors group-hover:border-brand-orange/40">
                  <Icon size={22} aria-hidden className="text-brand-gold" />
                  <h2 className="mt-4 font-display text-lg font-bold text-white">{cardTitle}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cardDescription}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold">Read guide <ArrowRight size={15} aria-hidden /></span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ScreenshotGallery />

      <section id="safety" className="border-y border-white/5 bg-surface/50 py-14 sm:py-16">
        <Container className="max-w-3xl">
          <div className="flex gap-4">
            <CircleHelp size={24} aria-hidden className="mt-1 shrink-0 text-brand-gold" />
            <div>
              <h2 className="font-display text-xl font-bold text-white sm:text-2xl">Check eligibility and play responsibly</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Gaming and real-money games may be restricted by age or location. Check applicable local rules and the operator’s terms before using any service. Never treat game outcomes as guaranteed income, and do not risk money you cannot afford to lose. See the <Link className="font-semibold text-brand-gold hover:underline" href="/responsible-play">responsible-play information</Link> for more.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <RelatedLinks heading="Keep exploring" links={[
        { label: "Daman Game", href: "/daman-game", description: "Read the Daman Game overview and artwork notes." },
        { label: "Daman Game Login", href: "/daman-game-login", description: "Review account access and security guidance." },
        { label: "Daman Game App", href: "/daman-game-app", description: "Check app and download information." },
      ]} />
    </>
  );
}
