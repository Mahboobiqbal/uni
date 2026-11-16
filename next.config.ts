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
