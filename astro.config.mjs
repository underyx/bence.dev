import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bence.dev",
  integrations: [
    react(),
    // App Store support/privacy pages are reachable by link only.
    sitemap({ filter: (page) => !page.includes("/stage-screen") }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  }
});
