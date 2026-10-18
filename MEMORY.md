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
