# MEMORY.md — quran-studio-web

## Repo
- GitHub: DashingMZA/quran-studio-web (public, default branch `main`)
- Purpose: official landing page for Quran Studio (companion to DashingMZA/quran-studio)
- Created 2026-10-17/18 by owner; initial Astro 7 build by agent 2026-10-17

## Design reference
- User pointed at https://nicheminer.net/ — wants a long, section-rich single landing
  page like it (hero, stats, features, how-it-works, comparison table, steps,
  download, support), adapted for Quran Studio.
- Earlier reference: https://quran8vs.pages.dev/ (upstream project's simpler page).

## Log
- **2026-10-17:** Initial build — Astro 7.4.0 static, latest deps (astro, @astrojs/check,
  typescript, wrangler). Sections: Nav, Hero, Features (9 cards), HowItWorks (4 steps),
  Comparison table, FirstVideo (4-step timeline), Download (Windows, SmartScreen note),
  Support (Ko-fi / Buy Me a Coffee / Gumroad), Footer. Brand: Quran green + Studio white
  on dark. Deploy: vercel.json + wrangler.toml/jsonc (static assets, SPA fallback).
- **2026-10-17:** Converted to multi-page site (owner: wanted nicheminer.net-style
  multiple pages, not one page). New: /download, /features, /how-it-works, /faq,
  /about, /contact, /privacy-policy, /terms-of-use. New src/lib/seo.ts helper
  builds the full SEO prop set for Layout. Nav/Footer now link pages. Owner's
  rework (aa318d0, 2c75dba) synced first; only new/edited-by-agent files pushed.
- **2026-10-17:** Download widget (owner request, based on his Manzil widget):
  new DownloadWidget.astro fetches latest GitHub release via public API and
  renders ALL platform buttons grouped by OS (Windows .exe/.msi, macOS
  Apple Silicon/Intel .dmg, Linux .AppImage/.deb/.rpm); visitor's OS first +
  highlighted. Download.astro rewritten to use it; Hero version bumped to v1.0.1.
- **2026-10-18:** Central SEO config (owner: "1 file se data change pe sb pe ho jye").
  New src/config/seo.ts = single source of truth (SITE_URL, SITE_NAME, DEFAULT_SEO
  with all 25 Layout props from owner's SEO data block). src/lib/seo.ts rewritten to
  import defaults and merge per-page title/description/path overrides (+ homeSeo()).
  index.astro's 25 hardcoded props replaced with <Layout {...homeSeo()} />; Footer
  site link now uses SITE_URL. Build verified: homepage renders owner's exact SEO
  values, /download keeps its own title with path-based canonical.
- **2026-10-18:** Mobile hamburger menu (Nav.astro + CSS, 3-line toggle →
  dropdown); System Requirements → 3 OS tabs (Windows/macOS/Linux, each with
  OS-specific notes, visitor's OS pre-selected); footer → 3 divs
  (brand 1/2 + links 1/4 + links 1/4, stacks on mobile); new "Open Web App"
  button on /download → APP_URL (https://app.quranstudio.cyou) from
  src/config/seo.ts (owner will host web app on app subdomain).
- **2026-10-18:** Mobile nav fix (owner screenshot): GitHub button no longer
  shows outside the menu on small screens (whole .nav-links hidden ≤640px,
  GitHub stays in hamburger dropdown); logo white-space:nowrap + smaller on
  mobile so it doesn't wrap to two lines.
- **2026-10-18:** Central site config + footer socials + error/AdSense pages.
  src/config/site.ts = ONE file for everything (URLs, socials, GA_ID,
  verification, SEO). Footer: social icons right of copyright (from config).
  OG image sharing fixed via absolute-URL resolution (owner's data untouched).
  robots.txt/sitemap.xml fixed. New: 404, 500, /disclaimer, /sitemap,
  /rss.xml, /llms.txt. package.json: test/test:types/test:build/test:links.
- **2026-10-18:** Audit fixes batch: astro.config.mjs now sets `site:` from
  SITE_URL (canonical/RSS/sitemap URLs correct); wrangler not_found_handling
  "single-page-application" -> "404-page" in BOTH wrangler.toml+jsonc (files
  kept per owner); vercel.json: vercel.app -> quranstudio.cyou 301 redirect,
  security headers (CSP/X-Frame-Options/Referrer-Policy/Permissions-Policy),
  immutable cache for /_astro + /icons; DownloadWidget: sessionStorage cache
  (1h TTL) for GitHub release API; Hero version badge auto-updates from
  release API (fallback v1.0.1); CookieConsent.astro (GDPR banner, GA loads
  only after accept); privacy policy covers cookies/GA/ads; CI workflow
  (.github/workflows/ci.yml) runs pnpm test on push+PR; LICENSE (GPL-3.0);
  README rewritten (multi-page, site.ts config, tests, deploy).
- **2026-10-18:** Logos + socials (owner request): Nav/Footer now use
  /icons/quran-studio-logo-dark.svg image (replacing inline SVG/text);
  SOCIALS in src/config/site.ts filled with owner's LinkedIn/Instagram/
  Facebook/TikTok/X URLs; social icons render in footer from config.

## 2026-10-18 — dynamic txt/xml routes
- sitemap.xml, robots.txt, llms.txt, ads.txt ab dynamic Astro routes hain
  (src/pages/*.ts), rss.xml.ts ki tarah. Static public/ files hata diye.
- ads.txt ka content src/config/site.ts ke ADS_TXT variable se aata hai —
  khaali ho to 404. site.ts single source of truth hai.

## 2026-10-18 — social preview images off
- og:image / twitter:image tags ab sirf tab render hote hain jab site.ts mein
  SOCIAL_IMAGE set ho. Default khaali = FB/X pe link share karne pe koi image
  nahi aayegi, sirf title + description. twitter:card ab "summary" hai.

## 2026-10-18 — social image RESTORED (my mistake)
- Maine sawal pe bina confirm kiye og:image hata diya tha — ghalti thi, user ko
  image chahiye thi. Seekha: sawal != directive, pehle confirm karo.
- SOCIAL_IMAGE ab `${SITE_URL}/screenshots/quran-studio.png` (absolute URL).
  Image quran-studio repo se li. Har page share pe yehi image jayegi.

## 2026-10-18 — schema.org JSON-LD
- src/lib/StructuredData.astro banaya: WebSite + SoftwareApplication +
  Organization JSON-LD, sab site.ts se. Layout mein include hai to har page
  pe render hota hai.

## 2026-10-24 — AdSense + verification in head
- site.ts mein ADSENSE_CLIENT = "ca-pub-8198067510150459" add. Layout head mein
  AdSense script render hota hai jab ID set ho. Verification (google/bing/
  pinterest/yandex) pehle se site.ts + head mein tha.
