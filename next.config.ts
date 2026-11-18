import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/llms.mdx/docs/:path*.md",
      },
      {
        source: "/docs/:path*.txt",
        destination: "/llms.mdx/docs/:path*.txt",
      },
    ];
  },
};

export default withMDX(nextConfig);
