import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "old-images.hb.ru-msk.vkcs.cloud"
      },
      {
        protocol: "http",
        hostname: "cdn-bucket.hb.bizmrg.com"
      }
    ],
  },
};

export default nextConfig;
