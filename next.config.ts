import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['api.lanyard.rest'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
