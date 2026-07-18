export const siteConfig = {
  name: "Daman Game",
  fullName: "Daman Game",
  tagline: "Skill-Based Gaming Arena",
  description:
    "Daman Game is a premium skill-based gaming platform — compete in tournaments, climb global leaderboards, and unlock rewards across arcade, strategy, racing, and puzzle titles.",
  url: "https://www.damangame.co.in",
  themeColor: "#050505",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Games", href: "/games" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Rewards", href: "/rewards" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  platform: [
    { label: "Games", href: "/games" },
    { label: "Tournaments", href: "/tournaments" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Rewards", href: "/rewards" },
    { label: "Daman Login", href: "/login" },
    { label: "Download", href: "/download" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
    { label: "Sister Companies", href: "/sister-companies" },
  ],
  support: [
    { label: "Help Center", href: "/support" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Responsible Play", href: "/responsible-play" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
