import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.drfmusical.com.br",
          },
        ],
        destination: "https://drfmusical.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
