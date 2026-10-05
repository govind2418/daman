import type { Metadata } from "next";
import { InfoLanding } from "@/components/shared/InfoLanding";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  { question: "What is Daman Game?", answer: "Daman Game is a name associated with online game content. This site is an independent information guide and does not operate the games or handle player accounts." },
  { question: "Which games are shown in the Daman artwork?", answer: "The image supplied with this project displays the labels Win Go, Aviator, Slots, Casino, and Fishing. The image alone does not confirm a live catalogue or current availability." },
  { question: "Can I play directly on this guide website?", answer: "No. This website publishes informational pages only; it does not host games, accept wagers, or manage a Daman Game account." },
];

export const metadata: Metadata = pageMetadata({
  title: "Daman Game Overview & Guide",
  absoluteTitle: "Daman Game Guide | Games, Access & Information",
  description: "Read a clear Daman Game overview, find the game names visible in existing Daman artwork, and navigate to login and app information pages.",
  path: "/daman-game",
  keywords: ["Daman Game", "Daman Game online", "Damangame guide", "Daman Game information"],
});

export default function DamanGamePage() {
  return <InfoLanding
    title="Daman Game Overview"
    eyebrow="Daman Game guide"
    description="A concise overview of the Daman Game name, existing visual material, and the information available on this website."
    path="/daman-game"
    image="/screenshots/daman-game-screenshot-07.png"
    imageAlt="Daman Game interface screenshot from the existing project image collection"
    sections={[
      {
        id: "daman-game-basics",
        title: "What to know about Daman Game",
        paragraphs: [
          "Daman Game is a search term people use for a Daman-branded online gaming experience. This page is a guide to the name and to the visual material already present in this project. It is not an official game service, account dashboard, or customer-support channel.",
          "The existing artwork references multiple game styles. Game rules, eligibility, availability, and any terms belong to the relevant operator and can change. Verify those details directly with the provider before using a service.",
        ],
      },
      {
        id: "daman-game-categories",
        title: "Game names shown in the project artwork",
        paragraphs: [
          "The supplied Daman Game banner visibly names Win Go, Aviator, Slots, Casino, and Fishing. These are image labels only; this guide does not confirm that each title is active, explain wagering mechanics, or promise any result.",
          "For general orientation, see the dedicated Daman Game app and Daman Game login guides. They explain what this site can confirm and share basic account-security precautions.",
        ],
        bullets: ["Win Go", "Aviator", "Slots", "Casino", "Fishing"],
      },
      {
        id: "daman-game-safety",
        title: "Check local rules and use care",
        paragraphs: [
          "Online gaming laws and age limits differ by location. Before accessing any third-party service, review local rules and the operator’s terms. Do not rely on search snippets or promotional graphics as proof of licensing, safety, payment conditions, or availability.",
          "Set personal limits, take breaks, and never treat games as a source of guaranteed income. If play stops feeling manageable, step away and seek support. More guidance is available on our responsible-play page.",
        ],
      },
    ]}
    faqs={faqs}
    links={[
      { label: "Daman Game Login", href: "/daman-game-login", description: "Read account-access and password-safety guidance." },
      { label: "Daman Game App", href: "/daman-game-app", description: "Review app availability and download precautions." },
      { label: "Home", href: "/", description: "Return to the Daman Game guide homepage." },
    ]}
  />;
}
