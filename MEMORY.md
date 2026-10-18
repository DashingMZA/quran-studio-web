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
