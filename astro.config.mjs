// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://splendorous-khapse-715a10.netlify.app/",
  integrations: [preact(), sitemap()],
});