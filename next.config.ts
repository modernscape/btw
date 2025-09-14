import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false, // ビルド中インジケータを消す
  },
};

export default nextConfig;
