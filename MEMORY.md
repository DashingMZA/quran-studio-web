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
