import type { Metadata } from "next";
import { LegalLayout } from "@/components/shared/LegalLayout";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { RelatedLinks } from "@/components/shared/RelatedLinks";
import { JsonLd } from "@/components/shared/JsonLd";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Responsible Play",
  description: "General wellbeing and risk-awareness information for people looking into online gaming. Check age and location rules before using any service.",
  path: "/responsible-play",
  keywords: ["responsible gaming", "online game safety", "Daman Game responsible play"],
});

export default function ResponsiblePlayPage() {
  return <>
    <LegalLayout
      eyebrow="Safety and wellbeing"
      title="Responsible Play"
      lastUpdated="October 5, 2026"
      breadcrumbs={<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Responsible Play" }]} />}
      sections={[
        { heading: "Know the risks", body: ["Some online games involve chance and may involve money. Outcomes are uncertain; there is no guaranteed way to win or recover losses. Treat gaming as entertainment, never as income or a solution to financial difficulty."] },
        { heading: "Check eligibility and local rules", body: ["Age limits and gaming restrictions depend on the service and where you live. Confirm the applicable law and provider requirements before using any third-party game. Do not access a service if you are not eligible."] },
        { heading: "Set personal limits", body: ["Decide in advance how much time and money you can comfortably spend, and stop when you reach those limits. Take breaks, avoid playing when distressed or under the influence, and do not borrow or use essential funds to continue."] },
        { heading: "Take a break and seek support", body: ["If gaming is affecting your finances, sleep, relationships, work, or wellbeing, step away and speak with someone you trust. Consider contacting a qualified local support service. This guide is informational and is not a treatment or crisis service."] },
        { heading: "This website's role", body: ["This website is an independent information guide. It does not run games, set account limits, verify an operator's licence, or provide account support. Check the provider's own responsible-play and support information directly."] },
      ]}
    />
    <RelatedLinks links={[
      { label: "Daman Game", href: "/daman-game", description: "Read the general Daman Game overview." },
      { label: "Daman Game App", href: "/daman-game-app", description: "Review app and download safety information." },
      { label: "Website Terms", href: "/terms", description: "Understand this guide's scope." },
    ]} />
    <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Responsible Play", path: "/responsible-play" }])} />
  </>;
}
