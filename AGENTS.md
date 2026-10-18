# AGENTS.md — quran-studio-web

Landing page for Quran Studio (DashingMZA/quran-studio), built with Astro 7 static output.

## Stack
- Astro 7 (static, no adapter), TypeScript, plain CSS in `.astro` files
- pnpm 12.9.1, Node >= 20, `packageManager` pinned
- Deploys: Vercel (framework preset Astro) and Cloudflare Workers static assets
  (`wrangler.toml` + `wrangler.jsonc`, `[assets]` → `./dist`, SPA fallback)

## Conventions
- One section = one component in `src/components/`, composed in `src/pages/index.astro`
- Brand: "Quran" in green (#22c55e), "Studio" in white; dark theme (#0a0a0a)
- Keep it dependency-light: no UI framework, no client JS unless needed
- Owner's repo trio (AGENTS.md / CLAUDE.md / MEMORY.md) must be updated on every change
- Push rule: only push files the agent itself changed; never revert owner's remote changes.
  Push script: `~/workspace/scripts/push-quran-studio.py` (3-way safe). For this repo,
  use the same pattern with REPO=quran-studio-web.
