import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Tu peux aussi activer ceci si tu utilises des images externes :
  // images: {
  //   domains: ["images.pexels.com"],
  // },
};

module.exports = nextConfig;
