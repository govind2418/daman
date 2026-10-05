import type { Metadata } from "next";
import { InfoLanding } from "@/components/shared/InfoLanding";
import { pageMetadata } from "@/lib/seo";

const faqs = [
  { question: "Can I download the Daman Game app from this website?", answer: "No. This project contains no verified APK or app-store listing, so this website does not offer an app download." },
  { question: "Is an APK shown in the project files?", answer: "No installable Android package is included in this repository. The images are visual assets, not an application installer." },
  { question: "How can I avoid an unsafe download?", answer: "Only use an app link published through a provider channel you have independently verified. Avoid copied download buttons, unsolicited files, and APKs from unknown sites." },
];

export const metadata: Metadata = pageMetadata({
  title: "Daman Game App Guide",
  absoluteTitle: "Daman Game App | Download & Access Information",
  description: "Daman Game app information: what this project contains, how to check for verified downloads, and precautions before installing an APK.",
  path: "/daman-game-app",
  keywords: ["Daman Game App", "Daman App", "Daman Game APK", "Damangame app information", "Daman Game download guide"],
});

export default function DamanGameAppPage() {
  return <InfoLanding
    title="Daman Game App Guide"
    eyebrow="App information"
    description="A practical guide for people searching for the Daman Game app, APK, or mobile access. No unverified installer is offered here."
    path="/daman-game-app"
    image="/screenshots/daman-game-screenshot-05.png"
    imageAlt="Existing Daman Game mobile-interface screenshot from the project assets"
    sections={[
      {
        id: "app-availability",
        title: "Daman Game app availability",
        paragraphs: [
          "This repository contains website code and image assets, but it does not include a verified Android APK or a confirmed app-store listing. A screenshot or promotional banner is not an installation file and does not prove that an app is currently available.",
          "For a genuine Daman Game app listing, check a provider source you can independently verify. Confirm the publisher, requested permissions, update date, and terms before installing anything. Availability can vary by device and location.",
        ],
      },
      {
        id: "app-download-safety",
        title: "Download safety: check before installing",
        paragraphs: [
          "Be cautious with websites that promise a latest Daman Game APK, instant rewards, or guaranteed results. This guide does not verify third-party download pages and cannot certify an app as safe or official.",
          "Keep your device security settings enabled, review permissions, and avoid sideloading software from a source you do not trust. Never install an app sent through an unsolicited message.",
        ],
        bullets: [
          "Verify the publisher through the provider’s independently confirmed channel.",
          "Review permissions and the privacy information before installation.",
          "Do not share account passwords or one-time codes with download sites or support contacts.",
        ],
      },
      {
        id: "mobile-access",
        title: "Mobile access and the Daman Game guide",
        paragraphs: [
          "This project itself is a responsive website guide. The existing mobile screenshots are included for visual reference only; they do not make the site an app and they do not verify live service features.",
          "For account questions, read the Daman Game login guide. For a general introduction and the game labels visible in the supplied artwork, visit the Daman Game overview.",
        ],
      },
    ]}
    faqs={faqs}
    links={[
      { label: "Daman Game", href: "/daman-game", description: "Explore the overview and the game names shown in artwork." },
      { label: "Daman Game Login", href: "/daman-game-login", description: "Read account-access and credential-safety guidance." },
      { label: "Home", href: "/", description: "Return to the main Daman Game information page." },
    ]}
  />;
}
