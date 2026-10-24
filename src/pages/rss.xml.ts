import { SITE_URL, SITE_NAME, AUTHOR_NAME, APP_URL } from "../config/site";
import { getCollection } from "astro:content";

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

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
      <title>Web App — ${escapeXml(SITE_NAME)}</title>
      <link>${APP_URL}</link>
      <guid isPermaLink="true">${APP_URL}</guid>
      <description>Use ${escapeXml(SITE_NAME)} directly in your browser — no install needed.</description>
    </item>`;

const pageItems = pages
  .map(
    (p) => `    <item>
      <title>${escapeXml(p.title)} — ${escapeXml(SITE_NAME)}</title>
      <link>${SITE_URL}${p.path === "/" ? "" : p.path}</link>
      <guid isPermaLink="true">${SITE_URL}${p.path === "/" ? "" : p.path}</guid>
      <description>${escapeXml(p.description)}</description>
    </item>`
  )
  .join("\n") + "\n" + appItem;

export async function GET() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const blogItems = posts
    .map((p) => {
      const image = p.data.heroImage
        ? `\n      <media:content url="${SITE_URL}${p.data.heroImage}" medium="image" />`
        : "";
      return `    <item>
      <title>${escapeXml(p.data.title)} — ${escapeXml(SITE_NAME)} Blog</title>
      <link>${SITE_URL}/blog/${p.id}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.id}</guid>
      <description>${escapeXml(p.data.description)}</description>
      <pubDate>${p.data.pubDate.toUTCString()}</pubDate>${image}
    </item>`;
    })
    .join("\n");
  // Blog first (newest first, with pubDates) so feed readers surface
  // articles ahead of the dateless static pages.
  const allItems = blogItems + "\n" + pageItems;
  const lastBuildDate = posts[0]
    ? posts[0].data.pubDate.toUTCString()
    : new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Official site feed for ${escapeXml(SITE_NAME)} — free, open-source Quran recitation video creator.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <ttl>60</ttl>
${allItems}
  </channel>
</rss>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
