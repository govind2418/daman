export const siteConfig = {
  name: "Daman Game",
  fullName: "Daman Game",
  tagline: "Daman Game Information & Guides",
  description:
    "Independent information about Daman Game, login safety, app availability, and game labels shown in existing project artwork. This website does not operate games or user accounts.",
  url: "https://damangame.co.in",
  themeColor: "#050505",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Daman Game", href: "/daman-game" },
  { label: "Login Guide", href: "/daman-game-login" },
  { label: "App Guide", href: "/daman-game-app" },
  { label: "Responsible Play", href: "/responsible-play" },
];

export const footerLinks = {
  platform: [
    { label: "Daman Game", href: "/daman-game" },
    { label: "Daman Game Login", href: "/daman-game-login" },
    { label: "Daman Game App", href: "/daman-game-app" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "Responsible Play", href: "/responsible-play" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "About this guide", href: "/daman-game" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
