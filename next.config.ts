import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/manufacturing-erp",
  assetPrefix: "/manufacturing-erp/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;