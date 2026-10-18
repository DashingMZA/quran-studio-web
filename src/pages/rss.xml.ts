import { SITE_URL, SITE_NAME } from "../config/site";

const pages = [
  { path: "/", title: "Home", description: "Create beautiful Quran recitation videos — free, open source." },
  { path: "/features", title: "Features", description: "Everything Quran Studio can do." },
  { path: "/how-it-works", title: "How It Works", description: "From verse to video in four steps." },
  { path: "/download", title: "Download", description: "Get Quran Studio for Windows, macOS, or Linux." },
  { path: "/faq", title: "FAQ", description: "Frequently asked questions." },
  { path: "/about", title: "About", description: "About the project." },
];

const items = pages
  .map(
    (p) => `    <item>
      <title>${p.title} — ${SITE_NAME}</title>
      <link>${SITE_URL}${p.path === "/" ? "" : p.path}</link>
      <guid>${SITE_URL}${p.path === "/" ? "" : p.path}</guid>
      <description>${p.description}</description>
    </item>`
  )
  .join("\n");

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
