import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config/site";

// Static output: deploys anywhere (Vercel, Cloudflare Workers Static Assets).
// `site` enables correct canonical URLs, RSS links, and sitemap generation.
export default defineConfig({
  output: "static",
  site: SITE_URL,
});
