import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so stray lockfiles in ~ aren't picked up
  turbopack: { root: __dirname },
};

export default nextConfig;
