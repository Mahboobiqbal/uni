import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
      },
    },
  },
  redirects: async () => [
    {
      source: "/admissions/fee-structure",
      destination: "/admissions#fees",
      permanent: true,
    },
    {
      source: "/admissions/merit-lists",
      destination: "/admissions#merit-lists",
      permanent: true,
    },
    {
      source: "/faculties",
      destination: "/faculty",
      permanent: true,
    },
    {
      source: "/affiliations",
      destination: "/affiliated-colleges",
      permanent: true,
    },
  ],
};

export default nextConfig;
