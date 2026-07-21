import type { Metadata } from "next";
import Link from "next/link";
import {
  LogIn,
  UserPlus,
  Globe,
  Trophy,
  BarChart3,
  Gift,
  UserCog,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/ui/IconCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Hero } from "@/components/home/Hero";
import { ScreenshotGallery } from "@/components/home/ScreenshotGallery";
import { AccountScreens } from "@/components/home/AccountScreens";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { gameCategories } from "@/lib/games";
import { pageMetadata } from "@/lib/seo";

const homeTitle = "Daman Game — Daman Login, Tournaments & Rewards";
const homeDescription =
  "Daman Game (damangame) is a gaming platform where players compete in ranked matches and tournaments, track their leaderboard position, and earn rewards. Log in or register at damangame.co.in to get started.";

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "",
  ogTitle: homeTitle,
});

const quickInfo = [
  { feature: "Official Platform", details: "Daman Game Official Website & APK" },
  { feature: "Available App", details: "Android APK (latest version)" },
  { feature: "Popular Games", details: "Win Go, Colour Prediction, Aviator, Slots, Casino & Fishing" },
  { feature: "Registration", details: "Mobile Number Registration" },
  { feature: "Welcome Rewards", details: "Gift Code, Invite Code & Promotional Bonuses (when available)" },
  { feature: "Wallet Features", details: "Deposit, Withdrawal & Transaction History" },
  { feature: "Payment Methods", details: "UPI, Bank Transfer, Paytm, USDT and other supported options" },
  { feature: "Account Access", details: "Secure Daman Game Login" },
  { feature: "Referral Program", details: "Invite Friends & Earn Rewards" },
  { feature: "Customer Support", details: "24×7 Help & Self-Service Center" },
  { feature: "Platform Access", details: "Mobile Browser & Android APK" },
];

const gettingStarted = [
  {
    icon: LogIn,
    title: "Log In",
    description:
      "Existing users can sign in with their registered email and password from the Login page. A password reset option is available if needed.",
  },
  {
    icon: UserPlus,
    title: "Register",
    description:
      "New users can create a free account by providing a display name, email address, and password. Registration requires confirming you are 18 years of age or older.",
  },
  {
    icon: Globe,
    title: "Access",
    description:
      "Daman Game is accessed through a web browser at damangame.co.in. No installation is required to create an account or play.",
    href: "/download",
  },
];

const accountFeatures = [
  {
    icon: Trophy,
    title: "Tournaments",
    description:
      "Participate in tournaments across all four game categories, run in bracket or leaderboard formats.",
  },
  {
    icon: BarChart3,
    title: "Leaderboard ranking",
    description:
      "Match performance contributes to a leaderboard ranking that updates as you play.",
  },
  {
    icon: Gift,
    title: "Daman Points & rewards",
    description:
      "Earn Daman Points through gameplay and track progress across the Bronze, Silver, Gold, and Platinum reward tiers.",
  },
  {
    icon: UserCog,
    title: "Account settings",
    description: "Manage your profile and account details after registering.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Getting Started with Daman Game
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Getting started with Daman Game is simple and takes only a few
            minutes. New users can create an account using a valid mobile
            number through the official registration page. During
            registration, players may also have the option to enter a Daman
            Game Gift Code or Invite Code, allowing them to unlock welcome
            rewards or promotional bonuses when available.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            After registration, users can either continue playing through the
            mobile browser or install the Daman Game APK for a faster and
            more convenient experience. The application provides quick access
            to the complete gaming platform, including account management,
            wallet features, promotions, and game categories.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Once the app is installed, simply complete your{" "}
            <Link href="/login" className="font-semibold text-brand-gold hover:underline">
              Daman Game Login
            </Link>{" "}
            to access your profile, explore available games, manage deposits
            and withdrawals, redeem rewards, and participate in ongoing
            events from a single dashboard.
          </p>

          <h3 className="mt-10 font-display text-xl font-bold text-white">
            Daman Game Quick Information
          </h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="border-b border-white/10 px-4 py-3 font-semibold text-white">
                    Feature
                  </th>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold text-white">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {quickInfo.map(({ feature, details }) => (
                  <tr key={feature} className="odd:bg-white/[0.02]">
                    <td className="border-b border-white/5 px-4 py-3 font-medium text-white/90">
                      {feature}
                    </td>
                    <td className="border-b border-white/5 px-4 py-3 text-muted">
                      {details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Discover the Daman Game Platform
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Explore everything that Daman Game has to offer, from exciting
            game categories to exclusive rewards designed for both new and
            returning players. The platform regularly introduces promotional
            events, welcome bonuses, gift codes, referral incentives, and
            seasonal campaigns that give players more ways to earn while
            enjoying their favourite games.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            One of the most popular features is the Daman Game Referral
            Program, where users can invite friends and unlock additional
            rewards based on referral activity. Alongside the referral
            system, players can also participate in daily check-in bonuses,
            limited-time promotions, activity rewards, VIP benefits, and
            other ongoing campaigns available through the platform.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Whether you&apos;re creating a new account or returning to play,
            this guide covers everything you need to know about Daman Game
            Login, Daman Game Register, Daman Game APK Download, Gift Codes,
            Bonuses, Wallet Features, and the complete gaming experience.
            You&apos;ll also learn how to navigate the platform, access
            popular game categories, manage your account, and make the most
            of the features available inside Daman Game.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            What is Daman Game?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Daman Game, also searched as damangame, is a gaming platform
            accessible at damangame.co.in. Registered users can compete in
            ranked matches and tournaments across four game categories —
            Arcade, Strategy, Racing, and Puzzle — and earn Daman Points
            through gameplay that can be tracked and redeemed within the
            Rewards program.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand-gold hover:underline"
            >
              Daman Login
            </Link>{" "}
            to continue, or{" "}
            <Link
              href="/register"
              className="font-semibold text-brand-gold hover:underline"
            >
              create a free account
            </Link>{" "}
            to get started.
          </p>
        </Container>
      </section>

      <ScreenshotGallery />

      <AccountScreens />

      <section className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Getting Started" title="Log in, register, or access the platform" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {gettingStarted.map(({ icon, title, description, href }) => {
              const card = (
                <IconCard icon={icon} title={title} description={description} headingLevel="h3" />
              );
              return href ? (
                <Link key={title} href={href}>
                  {card}
                </Link>
              ) : (
                <div key={title}>{card}</div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Account" title="What a Daman Game account includes" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accountFeatures.map(({ icon, title, description }) => (
              <IconCard key={title} icon={icon} title={title} description={description} headingLevel="h3" />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Gameplay" title="Game categories" description="Daman Game currently offers four game categories, each with its own ranked ladder." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gameCategories.map((category) => (
              <Link key={category.slug} href={`/games/${category.slug}`}>
                <GlassCard as="article" className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-red/20 to-brand-orange/20">
                    <category.icon size={20} className="text-brand-gold" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {category.tagline}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/games" variant="outline" size="md" icon={<ArrowRight size={16} aria-hidden />}>
              Browse all games
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Daman Game includes a persistent navigation bar and footer with
            links to every major section, along with a simplified navigation
            layout on mobile devices.
          </p>
        </Container>
      </section>

      <RelatedLinks
        heading="Explore the site"
        links={[
          { label: "Games", href: "/games", description: "Browse all four game categories." },
          { label: "Tournaments", href: "/tournaments", description: "View upcoming and ongoing tournaments." },
          { label: "Leaderboard", href: "/leaderboard", description: "See current player rankings." },
          { label: "Rewards", href: "/rewards", description: "View reward tiers and perks." },
          { label: "About", href: "/about", description: "Information about Daman Game." },
          { label: "Support", href: "/support", description: "Help center and account topics." },
          { label: "Download", href: "/download", description: "How to access Daman Game." },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
            Responsible use
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Creating a Daman Game account requires confirming you are 18
            years of age or older. Account and gameplay settings are
            available after registration. For more information, see the{" "}
            <Link href="/responsible-play" className="font-semibold text-brand-gold hover:underline">
              Responsible Play
            </Link>{" "}
            and{" "}
            <Link href="/support" className="font-semibold text-brand-gold hover:underline">
              Support
            </Link>{" "}
            pages.
          </p>
        </Container>
      </section>
    </>
  );
}
