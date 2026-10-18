import { SITE_URL } from "../config/site";

const pages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/download", changefreq: "weekly", priority: "0.9" },
  { path: "/features", changefreq: "monthly", priority: "0.8" },
  { path: "/how-it-works", changefreq: "monthly", priority: "0.8" },
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
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
