# Quran Studio — Website

The official website for [Quran Studio](https://github.com/DashingMZA/quran-studio),
built with Astro 7 (static). A multi-page site: home, features, how-it-works,
download, FAQ, about, contact, plus legal pages (privacy, terms, disclaimer),
sitemap, RSS feed, and custom 404/500 pages.

Live: **https://quranstudio.cyou**

## Quick start

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static output in dist/
pnpm preview
```

## Configuration — one file

**`src/config/site.ts`** is the single source of truth for the whole site:
site URL, app URL, GitHub repo/releases/license links, author, social links,
Google Analytics ID, webmaster verification codes, and all default SEO values.
Change a value there and it applies everywhere — no hunting through components.

## Tests

```bash
pnpm test            # types + build + link check
pnpm test:types      # astro check
pnpm test:build      # astro build
pnpm test:links      # verify every internal link in dist/ resolves
```

CI (`.github/workflows/ci.yml`) runs `pnpm test` on every push and PR.

## SEO

- `src/lib/seo.ts` merges per-page title/description/path overrides onto the
  central defaults; OG/Twitter images are resolved to absolute URLs at render time.
- `public/sitemap.xml`, `public/robots.txt`, `/rss.xml` feed, `/llms.txt`,
  and an HTML sitemap at `/sitemap` are all generated from the same config.
- `astro.config.mjs` sets `site:` from `SITE_URL` so canonical URLs are correct.

## Deploy

**Vercel** (primary) — import the repo, framework preset `Astro`.
`vercel.json` handles: `vercel.app` → `quranstudio.cyou` redirect (no duplicate
content), security headers (CSP, X-Frame-Options, Referrer-Policy), and
long-term caching for hashed static assets.

**Cloudflare Workers** — static assets via Wrangler:

```bash
pnpm deploy:cf   # builds then `wrangler deploy`
```

Or dashboard: connect the repo, build `pnpm build`, output `dist`.
`not_found_handling` is `"404-page"` so the custom 404 page works.

## Tech

Astro 7 (static), TypeScript, no UI framework — pure Astro components + CSS.
Keep it dependency-light: no client JS unless needed.

## License

GPL-3.0 — see [LICENSE](LICENSE).
