import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Evita erro com imagens no modo estático
  },
  trailingSlash: true,
  // Define explicitamente a raiz do turbopack para evitar que o Next infira a pasta errada
  turbopack: {
    root: '.'
  }
};

export default nextConfig;
