import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


  // 이미지 호스트
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'styangpa.blob.core.windows.net'
      }
    ]
  },

  // cache hit 확인
  logging: {
    fetches: {
      fullUrl: true,
    }
  }
};

export default nextConfig;
