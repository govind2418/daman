import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.damangame.co.in" }],
        destination: "https://damangame.co.in/:path*",
        permanent: true,
      },
      { source: "/login", destination: "/daman-game-login", permanent: true },
      { source: "/register", destination: "/daman-game-login", permanent: true },
      { source: "/download", destination: "/daman-game-app", permanent: true },
      { source: "/games", destination: "/daman-game", permanent: true },
      { source: "/games/:path*", destination: "/daman-game", permanent: true },
      { source: "/tournaments", destination: "/daman-game", permanent: true },
      { source: "/leaderboard", destination: "/daman-game", permanent: true },
      { source: "/rewards", destination: "/daman-game", permanent: true },
      { source: "/about", destination: "/daman-game", permanent: true },
      { source: "/careers", destination: "/daman-game", permanent: true },
      { source: "/press", destination: "/daman-game", permanent: true },
      { source: "/blog", destination: "/daman-game", permanent: true },
      { source: "/blog/:path*", destination: "/daman-game", permanent: true },
      { source: "/sister-companies", destination: "/daman-game", permanent: true },
      { source: "/support", destination: "/faq", permanent: true },
      { source: "/contact", destination: "/faq", permanent: true },
    ];
  },
};

export default nextConfig;
