import { SITE_URL, SITE_NAME, AUTHOR_NAME, APP_URL } from "../config/site";

const pages = [
  { path: "/", title: "Home", description: "Create beautiful Quran recitation videos — free, open source." },
  { path: "/features", title: "Features", description: "Everything " + SITE_NAME + " can do: surah picker, famous reciters, auto-synced verses, beautiful typography, backgrounds, Urdu translation and HD MP4 export." },
  { path: "/how-it-works", title: "How It Works", description: "From verses to video in four steps: pick your verses, choose a reciter, style it your way, export and share. Your first video in 10 minutes." },
  { path: "/download", title: "Download", description: "Download " + SITE_NAME + " for Windows, macOS, or Linux. Free, open-source Quran recitation video editor. No account needed." },
  { path: "/faq", title: "FAQ", description: "Frequently asked questions about " + SITE_NAME + ": pricing, Windows support, reciters, exports, offline use and more." },
  { path: "/about", title: "About", description: SITE_NAME + " is a free, open-source app for creating beautiful Quran recitation videos — built by " + AUTHOR_NAME + " for creators everywhere." },
  { path: "/contact", title: "Contact", description: "Get in touch about " + SITE_NAME + ": bug reports, feature requests and questions via GitHub." },
  { path: "/privacy-policy", title: "Privacy Policy", description: "Our privacy policy." },
  { path: "/terms-of-use", title: "Terms of Use", description: "Terms of use for " + SITE_NAME + " software and this website." },
  { path: "/disclaimer", title: "Disclaimer", description: "Disclaimer for " + SITE_NAME + ": accuracy of Quranic content, third-party services, and limitation of liability." },
  { path: "/sitemap", title: "Sitemap", description: "Browse every page on the " + SITE_NAME + " website." },
];

const appItem = `    <item>
      <title>Web App — ${SITE_NAME}</title>
      <link>${APP_URL}</link>
      <guid>${APP_URL}</guid>
      <description>Use ${SITE_NAME} directly in your browser — no install needed.</description>
    </item>`;

const items = pages
  .map(
    (p) => `    <item>
      <title>${p.title} — ${SITE_NAME}</title>
      <link>${SITE_URL}${p.path === "/" ? "" : p.path}</link>
      <guid>${SITE_URL}${p.path === "/" ? "" : p.path}</guid>
      <description>${p.description}</description>
    </item>`
  )
  .join("\n") + "\n" + appItem;

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>Official site feed for ${SITE_NAME} — free, open-source Quran recitation video creator.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
