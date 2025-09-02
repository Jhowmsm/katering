import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static exports for GitHub Pages
  basePath: '/katering', // Required for GitHub Pages deployment to a subpath
  /* config options here */
};

export default nextConfig;