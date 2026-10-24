import { SITE_URL, APP_URL } from "../config/site";
import { getCollection } from "astro:content";

const pages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/download", changefreq: "weekly", priority: "0.9" },
  { path: "/features", changefreq: "monthly", priority: "0.8" },
  { path: "/how-it-works", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.4" },
  { path: "/terms-of-use", changefreq: "yearly", priority: "0.4" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.4" },
  { path: "/sitemap", changefreq: "monthly", priority: "0.5" },
];

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const blogUrls = posts
    .map((p) => {
      // Real post date (not today) so crawlers see true freshness.
      const lastmod = (p.data.updatedDate ?? p.data.pubDate)
        .toISOString()
        .slice(0, 10);
      const image = p.data.heroImage
        ? `
    <image:image>
      <image:loc>${SITE_URL}${p.data.heroImage}</image:loc>
    </image:image>`
        : "";
      return `  <url>
    <loc>${SITE_URL}/blog/${p.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>${image}
  </url>`;
    })
    .join("\n");
  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${SITE_URL}${p.path === "/" ? "" : p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");
  const appUrl = `  <url>
    <loc>${APP_URL}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
${appUrl}
${blogUrls}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
