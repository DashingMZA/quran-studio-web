# Quran Studio — Website

The official landing page for [Quran Studio](https://github.com/DashingMZA/quran-studio),
built with Astro. A rich single-page site: hero, features, how-it-works,
comparison, download, support, and footer.

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output in dist/
pnpm preview
```

## Deploy

**Vercel** — import the repo, framework preset `Astro`. Build: `pnpm build`, output: `dist`.

**Cloudflare Workers** — static assets via Wrangler:

```bash
pnpm deploy:cf   # builds then `wrangler deploy`
```

Or dashboard: connect the repo, build `pnpm build`, output `dist`.

## Tech

Astro 7 (static), TypeScript, no UI framework — pure Astro components + CSS.
