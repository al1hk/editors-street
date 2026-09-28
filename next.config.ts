import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/assets/image03.gif",
        destination: "/assets/logo.webp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
