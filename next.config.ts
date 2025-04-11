import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.AZURE_STORAGE||"",
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
