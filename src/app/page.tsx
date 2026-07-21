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
import { Accordion } from "@/components/ui/Accordion";
import { Steps } from "@/components/ui/Steps";
import { Hero } from "@/components/home/Hero";
import { ScreenshotGallery } from "@/components/home/ScreenshotGallery";
import { AccountScreens } from "@/components/home/AccountScreens";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { TableOfContents } from "@/components/shared/TableOfContents";
import { gameCategories } from "@/lib/games";
import { faqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";

const homeTitle = "Daman Game — Daman Login, Tournaments & Rewards";
const homeDescription =
  "Daman Game (damangame) is a gaming platform where players compete in ranked matches and tournaments, track their leaderboard position, and earn rewards. Log in or register at damangame.co.in to get started.";

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "",
  ogTitle: homeTitle,
  keywords: [
    "Daman Game Login",
    "Daman Game Register",
    "Daman Game APK",
    "Daman Game Official Website",
    "Daman Game Tournaments",
    "Daman Game Rewards",
    "Daman Game FAQ",
  ],
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

const registerSteps = [
  {
    title: "Visit the official Daman Game website",
    description:
      "Open damangame.co.in in your browser. No installation is required — Daman Game runs entirely on the web.",
  },
  {
    title: "Open the registration page",
    description: "Select Register on the homepage to begin creating your account.",
  },
  {
    title: "Enter your information",
    description:
      "Provide a display name, a valid email address, and a password of at least 8 characters, then confirm your password.",
  },
  {
    title: "Confirm you're eligible",
    description:
      "Confirm you are 18 years of age or older and agree to the Terms of Service and Privacy Policy.",
  },
  {
    title: "Finish registration",
    description: "Select Create Account to finish. You can log in immediately afterward.",
  },
];

const loginSteps = [
  {
    title: "Visit the official Daman Game website",
    description: "Open damangame.co.in and go to the Login page.",
  },
  {
    title: "Enter your registered email and password",
    description: "Use the email address and password you created your account with.",
  },
  {
    title: "Forgot your password?",
    description:
      "Select 'Forgot password?' on the Login page, which directs you to Contact so the support team can help you regain access.",
  },
  {
    title: "Select Log In",
    description: "You'll be taken straight to your account dashboard.",
  },
];

const accessSteps = [
  {
    title: "No installation needed",
    description:
      "Daman Game is a web-based platform — there is no app to download or install on any device.",
  },
  {
    title: "Visit damangame.co.in",
    description:
      "Open the site from any modern browser on desktop or mobile, including Chrome, Safari, Firefox, or Edge.",
  },
  {
    title: "Log in or create an account",
    description:
      "Use Daman Login if you already have an account, or Register to create a new one and get started right away.",
  },
];

const playSteps = [
  {
    title: "Sign in to your account",
    description: "Open damangame.co.in and complete your Daman Login with your registered email and password.",
  },
  {
    title: "Browse the game library",
    description:
      "Explore the four game categories — Arcade, Strategy, Racing, and Puzzle — each with its own set of titles.",
  },
  {
    title: "Select a game and join a match",
    description:
      "Choose a title that interests you, then start matchmaking. You'll be paired with an opponent of a similar skill rank in under a second.",
  },
  {
    title: "Play the match",
    description: "Compete according to the game's rules — every title offers a different gameplay experience.",
  },
  {
    title: "Check your results",
    description:
      "After each match, your result is reflected in your leaderboard ranking, and any Daman Points earned are credited to your account.",
  },
  {
    title: "Track your progress",
    description:
      "View your leaderboard position, reward tier, and match history anytime from your account dashboard.",
  },
];

const playTips = [
  "Explore different game categories before choosing your favourites.",
  "Read each game's instructions to understand how it works before joining a match.",
  "Check the Rewards section regularly for new tiers and perks as you earn Daman Points.",
  "Keep your account information secure and only sign in through the official damangame.co.in website.",
  "Take breaks and play at a pace that works for you.",
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

      <TableOfContents
        items={[
          { label: "Getting Started", href: "#getting-started" },
          { label: "Discover the Platform", href: "#discover-platform" },
          { label: "Daman Game Register", href: "#how-to-register" },
          { label: "Daman Game Login", href: "#how-to-login" },
          { label: "Daman Game APK Download", href: "#how-to-access" },
          { label: "How to Play", href: "#how-to-play" },
          { label: "What is Daman Game?", href: "#what-is-daman-game" },
          { label: "Screenshots", href: "#screenshots" },
          { label: "Account Dashboard", href: "#account-screens" },
          { label: "Log In / Register / Access", href: "#login-register-access" },
          { label: "Account Includes", href: "#account-includes" },
          { label: "Game Categories", href: "#game-categories" },
          { label: "FAQ", href: "#faq" },
          { label: "Explore the Site", href: "#explore-site" },
          { label: "Responsible Use", href: "#responsible-use" },
        ]}
      />

      <section id="getting-started" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
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

      <section id="discover-platform" className="py-16 sm:py-20">
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

      <section id="how-to-register" className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Daman Game Register
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Creating your Daman Game account only takes a few minutes. Once
            registered, you&apos;ll be able to access the platform, explore
            available games, and participate in ongoing promotions.
          </p>
          <Steps steps={registerSteps} />
          <p className="mt-8 text-base leading-relaxed text-muted sm:text-lg">
            After registration, you can immediately{" "}
            <Link href="/login" className="font-semibold text-brand-gold hover:underline">
              Daman Login
            </Link>
            , browse game categories, and track your Daman Points in the{" "}
            <Link href="/rewards" className="font-semibold text-brand-gold hover:underline">
              Rewards
            </Link>{" "}
            section.
          </p>
        </Container>
      </section>

      <section id="how-to-login" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Daman Game Login
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Returning players can securely access their account in just a
            few steps.
          </p>
          <Steps steps={loginSteps} />
        </Container>
      </section>

      <section id="how-to-access" className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Daman Game APK Download
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Daman Game is accessed entirely through the web — there&apos;s no
            app to download or install.
          </p>
          <Steps steps={accessSteps} />
        </Container>
      </section>

      <section id="how-to-play" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            How to Play Games on Daman Game
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Once you&apos;ve completed your{" "}
            <Link href="/login" className="font-semibold text-brand-gold hover:underline">
              Daman Game Login
            </Link>{" "}
            and your account is ready, you can start exploring the
            platform&apos;s game collection across all four categories.
          </p>
          <Steps steps={playSteps} />

          <h3 className="mt-10 font-display text-xl font-bold text-white">
            Tips for new players
          </h3>
          <ul className="mt-4 space-y-2">
            {playTips.map((tip) => (
              <li key={tip} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                {tip}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="what-is-daman-game" className="py-16 sm:py-20">
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

      <section id="login-register-access" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
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

      <section id="account-includes" className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Account" title="What a Daman Game account includes" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accountFeatures.map(({ icon, title, description }) => (
              <IconCard key={title} icon={icon} title={title} description={description} headingLevel="h3" />
            ))}
          </div>
        </Container>
      </section>

      <section id="game-categories" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
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

      <section id="faq" className="border-y border-white/5 bg-surface/50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions about Daman Game"
            description="Common questions about Daman Login, registration, tournaments, rewards, and more."
          />
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
          <div className="mt-10 text-center">
            <Button href="/faq" variant="outline" size="md" icon={<ArrowRight size={16} aria-hidden />}>
              View all FAQs
            </Button>
          </div>
        </Container>
      </section>

      <RelatedLinks
        id="explore-site"
        heading="Explore the site"
        links={[
          { label: "Games", href: "/games", description: "Browse all four game categories." },
          { label: "Arcade", href: "/games/arcade", description: "Fast, skill-based arcade titles." },
          { label: "Strategy", href: "/games/strategy", description: "Tactical, planning-focused titles." },
          { label: "Racing", href: "/games/racing", description: "Speed and precision racing titles." },
          { label: "Puzzle", href: "/games/puzzle", description: "Logic and pattern puzzle titles." },
          { label: "Tournaments", href: "/tournaments", description: "View upcoming and ongoing tournaments." },
          { label: "Leaderboard", href: "/leaderboard", description: "See current player rankings." },
          { label: "Rewards", href: "/rewards", description: "View reward tiers and perks." },
          { label: "Daman Login", href: "/login", description: "Sign in to your account." },
          { label: "Register", href: "/register", description: "Create a new Daman Game account." },
          { label: "Download", href: "/download", description: "How to access Daman Game." },
          { label: "FAQ", href: "/faq", description: "Answers to common questions." },
          { label: "About", href: "/about", description: "Information about Daman Game." },
          { label: "Support", href: "/support", description: "Help center and account topics." },
          { label: "Contact", href: "/contact", description: "Reach the support team directly." },
          { label: "Blog", href: "/blog", description: "Gameplay guides and tournament recaps." },
          { label: "Careers", href: "/careers", description: "Open roles at Daman Game." },
          { label: "Press", href: "/press", description: "Company news and media resources." },
          { label: "Sister Companies", href: "/sister-companies", description: "Related platforms and companies." },
          { label: "Responsible Play", href: "/responsible-play", description: "Our responsible play policy." },
          { label: "Terms of Service", href: "/terms", description: "Platform rules and account eligibility." },
          { label: "Privacy Policy", href: "/privacy", description: "How your account data is handled." },
        ]}
      />

      <section id="responsible-use" className="py-16 sm:py-20">
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
