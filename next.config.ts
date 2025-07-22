import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

// module.exports = {
//   images: {
//     domains: ["images.pexels.com"],
//   },
// };

// export default nextConfig;

module.exports = nextConfig;
