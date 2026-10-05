import type { Metadata } from "next";
import { InfoLanding } from "@/components/shared/InfoLanding";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  { question: "Does this site provide Daman Game login?", answer: "No. This is an information site, not an account portal. Do not enter a password or one-time code on this website." },
  { question: "Where should I check before signing in?", answer: "Use an account address obtained from a source you have independently verified as belonging to the operator. Check the domain carefully and review the operator's terms and local eligibility requirements." },
  { question: "What should I do if I cannot access my account?", answer: "Contact the service provider through its verified support channel. Never share your password, verification code, or recovery phrase with another person." },
];

export const metadata: Metadata = pageMetadata({
  title: "Daman Game Login Guide",
  absoluteTitle: "Daman Game Login | Safe Account Access Guide",
  description: "Daman Game login information with account safety tips, domain checks, and help for access issues. This guide does not collect credentials or provide account sign-in.",
  path: "/daman-game-login",
  keywords: ["Daman Game Login", "Damangame Login", "Daman login guide", "Daman Game account access"],
});

export default function DamanGameLoginPage() {
  return <InfoLanding
    title="Daman Game Login Guide"
    eyebrow="Account access"
    description="Find Daman Game login guidance and practical account-security steps. This page is informational and is not a sign-in form."
    path="/daman-game-login"
    image="/screenshots/daman-game-screenshot-02.png"
    imageAlt="Existing Daman Game mobile interface screenshot used as a visual reference"
    sections={[
      {
        id: "login-guide",
        title: "Before using a Daman Game login page",
        paragraphs: [
          "Searches for Daman Game login can lead to many pages. This website does not authenticate users, store account details, reset passwords, or connect to the game service. It has no working Daman login form.",
          "If you choose to access a third-party gaming service, obtain its address from a source you trust and verify the spelling of the domain before entering information. Read its current terms and confirm the service is permitted where you live.",
        ],
        bullets: [
          "Never enter passwords or one-time verification codes on an unfamiliar page.",
          "Do not reuse a password from email, banking, or other important accounts.",
          "Use only support details published by the provider on its verified channel.",
        ],
      },
      {
        id: "login-problems",
        title: "If you are having account-access problems",
        paragraphs: [
          "This guide cannot inspect or recover a Daman Game account. Use the account recovery process provided by the verified operator, and contact its support team if the recovery steps fail. Do not send credentials, identity documents, or payment information to this website.",
          "A legitimate support agent should not need your password or one-time code. If someone requests either, stop the conversation and verify the contact channel independently.",
        ],
      },
      {
        id: "login-eligibility",
        title: "Eligibility and responsible use",
        paragraphs: [
          "Account eligibility depends on the provider’s current rules and the laws where you are located. Check age requirements and local restrictions before attempting to sign in. If games involving money are available, understand the risks and never play with funds you need for essentials.",
          "For broader brand information, read the Daman Game overview. For app-related questions, see the separate Daman Game app guide.",
        ],
      },
    ]}
    faqs={faqs}
    links={[
      { label: "Daman Game", href: "/daman-game", description: "Read the overview and notes about the supplied artwork." },
      { label: "Daman Game App", href: "/daman-game-app", description: "See what this project can confirm about app access." },
      { label: "Home", href: "/", description: "Return to the main Daman Game information page." },
    ]}
  />;
}
