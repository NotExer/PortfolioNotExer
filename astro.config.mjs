import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://notexer.dev",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  adapter: vercel({
    staticHeaders: true,
  }),
  integrations: [sitemap()],
  image: {
    layout: "constrained",
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
