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
    ];
  },
};

export default nextConfig;
