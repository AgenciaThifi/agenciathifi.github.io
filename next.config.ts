import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Evita erro com imagens no modo estático
  },
};

export default nextConfig;
