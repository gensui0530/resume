import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? "/resume" : "",
  assetPrefix: isProd ? "/resume/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/resume" : "",
  },
};

export default nextConfig;
