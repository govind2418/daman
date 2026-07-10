export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "inside-the-rise-of-competitive-mobile-gaming",
    title: "Inside the rise of competitive mobile gaming",
    excerpt:
      "Mobile-first skill gaming has quietly become one of the fastest-growing competitive scenes. Here's what's driving it.",
    date: "Jun 18, 2026",
    category: "Industry",
    readTime: "6 min read",
    content: [
      "Competitive mobile gaming has moved from a niche curiosity to a genuine growth engine for the wider gaming industry. Over the past two seasons, we've watched ranked participation on Daman Game grow faster on mobile than on any other platform.",
      "Part of the shift is structural: matchmaking latency has improved dramatically across carrier networks, closing the gap between mobile and desktop competitive experiences. Players no longer have to choose between convenience and fairness.",
      "The other part is cultural. A new generation of competitive players grew up gaming on phones first. For them, a tournament bracket on a five-inch screen feels just as legitimate as one on a 27-inch monitor — and our matchmaking system treats it that way too.",
      "We expect this trend to keep accelerating through the next few seasons, and we're investing accordingly — from cross-platform rank parity to mobile-specific tournament formats launching later this year.",
    ],
  },
  {
    slug: "how-fair-matchmaking-actually-works",
    title: "How fair matchmaking actually works",
    excerpt:
      "A behind-the-scenes look at the ranking model powering every match on Daman Game.",
    date: "May 2, 2026",
    category: "Product",
    readTime: "8 min read",
    content: [
      "Fair matchmaking sounds simple until you try to build it at scale. Every match on Daman Game runs through a ranking model that weighs recent performance, consistency, and category-specific skill signals.",
      "Unlike flat ELO systems, our model adjusts confidence intervals per player, meaning newer accounts converge to their true skill rank faster, while long-term veterans see more stable, predictable pairings.",
      "We also run continuous fairness audits — comparing win rates across regions, devices, and account age to catch any systemic bias before it affects rankings.",
      "The result: matches that feel close, competitive, and worth playing, whether you're rank one or rank one hundred thousand.",
    ],
  },
  {
    slug: "season-4-championship-what-to-expect",
    title: "Season 4 Championship: what to expect",
    excerpt:
      "Bracket format, key dates, and how to qualify for the biggest tournament of the year.",
    date: "Apr 20, 2026",
    category: "Tournaments",
    readTime: "4 min read",
    content: [
      "The Season 4 Championship kicks off July 28 with a 16-player single-elimination bracket across the Racing category, following three months of qualifying rounds.",
      "Qualification is based on your top-10 ranked match average over the qualifying window — no separate sign-up required if you're already competing.",
      "Winners take home the Champion badge, 50,000 Daman Points, and a permanent spot on the Hall of Fame page.",
      "Full bracket seeding will be published one week before the event on the Tournaments page.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
