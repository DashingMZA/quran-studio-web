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

## 2026-10-24 — alt attributes fix (Site Scan warning)
- Nav/Footer logos aur Screenshots thumbnails mein alt="" tha jo scanner flag
  kar raha tha. Sab ko descriptive alt diya: logo = "Quran Studio logo",
  thumbnails = shot ka alt text.

## 2026-10-24 — on-page SEO fix batch (audit follow-up)
- Domain: code already .bond (SITE_URL); README .cyou → .bond. NOTE: .cyou
  deployment itself still live — needs Vercel redirect to .bond (owner action).
- /ur hreflang + canonicalUrlur removed from Layout + seo.ts (page 404s).
- Installation Note H4 → H3 (Download component, home + download pages).
- FAQ: questions now H2 (click accordion) + FAQPage JSON-LD.
- Titles lengthened: Features/HowItWorks/About/Contact/Disclaimer/Sitemap/
  Terms/Privacy/FAQ + Download now "Windows, macOS & Linux".
- Home: Features compact (6 cards + "See all features" link) to cut verbatim
  duplication with /features.
- DownloadWidget: noscript fallback link to GitHub Releases for crawlers.
- Privacy H1 + Terms brand suffix already in repo (audit saw stale live site).
- "Additional Details" boilerplate not in repo — stale live deployment only.

## 2026-10-24 — H1 missing fix (Site Scan notice)
- /features, /how-it-works, /download pe H1 nahi tha (components sirf H2
  dete the). Har page ke main mein sr-only H1 add kiya — design change
  nahi, crawlers + screen readers ko H1 mil gaya.
- Note: app.quranstudio.bond/ bhi list mein tha — wo web app hai, is repo
  ka hissa nahi, isliye usko nahi chheda.

## 2026-10-24 — blog section launch (AdSense content push)
- Content collection: src/content.config.ts (glob loader, schema: title,
  description, pubDate, updatedDate?, heroImage?) — reference format from
  ZohanZaheer/ytcpm-website src/content/blog.
- Pages: /blog index (card grid) + /blog/[slug] via BlogPost layout
  (hero image, date, "Keep reading" related posts, Download CTA).
- Nav + Footer mein Blog link; sitemap.xml + rss.xml mein blog posts
  auto-include (getCollection).
- 10 articles (800-1200 words, high-value keywords, internal links to
  main pages + cross-links between posts): how-to-make-quran-recitation-
  videos, best-quran-video-maker-software, how-to-sync-quran-audio-with-
  text, quran-reels-instagram-tiktok-guide, best-arabic-fonts-quran-
  videos, how-to-add-urdu-translation-quran-videos, quran-youtube-
  channel-ideas, ayat-ul-kursi-video-guide, quran-video-backgrounds-
  ideas, free-vs-paid-quran-video-editors.
- 10 cover images in public/blog/<slug>.jpg (dark + green site style,
  2048×1152). NOTE: media-generation-*.json sidecars in public/blog/
  are pipeline metadata — do NOT push them.
- Build verified locally: 24 pages, sitemap has all 10 blog URLs.

## 2026-10-24 — cookie banner position fix
- Banner ki koi CSS nahi thi, is liye wo page ke upar dikh raha tha.
  Pehle full-width bottom bar banaya, phir owner ne popup style manga —
  ab .consent ek floating card popup hai (bottom-left corner, rounded,
  shadow, dark green bg). [hidden] par display: none rakha taake JS
  toggle kaam kare.

## 2026-10-24 — sitemap / rss / llms.txt blog fix
- sitemap.xml.ts: /blog index add kia (pehle missing tha); blog
  lastmod ab asli pubDate/updatedDate hai (pehle sab par "today" tha);
  har post ke cover ke liye image sitemap entry (image:loc).
- rss.xml.ts: blog items pehle, newest-first, pubDate ke saath;
  channel mein atom self-link, lastBuildDate, ttl; har post ka cover
  media:content se; titles/descriptions XML-escaped (ampersand bug se
  bachne ke liye).
- llms.txt.ts: Blog section pehle bilkul missing tha — ab 10 posts ki
  list (title + description + URL, newest-first) + Blog aur legal
  pages ke links.
- Local build verified: sitemap mein 10 post URLs + 10 image entries,
  rss mein 22 items (10 blog + 11 pages + app), llms.txt mein 10
  blog links.

## 2026-10-24 — PageSpeed fix batch (target: 99+ mobile + desktop)
- Images: blog covers 2048px -> 1200px JPEG q82 progressive (har cover
  ~73% chhota, 360-528 KB -> ~100-148 KB); screenshots PNG -> WebP
  (app-editor 377 KB -> 39 KB, total ~90% kam) aur Screenshots.astro
  ab .webp use karta hai. Sab images par width/height + decoding async;
  blog index par pehli card eager/fetchpriority high, baqi lazy;
  carousel main image ab lazy (below fold hai).
- Fonts: Marcellus ab self-hosted hai (public/fonts/marcellus.woff2,
  8.9 KB, @font-face font-display swap) — Google Fonts ka render-
  blocking request khatam; live CSP font-src 'self' pehle Google font
  ko block bhi kar raha tha.
- CSP (vercel.json): AdSense pehle CSP se block ho raha tha (script-src
  mein googlesyndication nahi tha) — ab script/connect/frame-src mein
  pagead2.googlesyndication.com, *.googlesyndication.com aur
  googleads.g.doubleclick.net allow hain. Cache: _astro 1 saal
  immutable, icons/screenshots/social_media/fonts/blog jpgs 30 din.
- A11y: FAQ questions ab asli <button> hain (aria-expanded/controls,
  keyboard se khulte hain — pehle sirf mouse click kaam karta tha);
  screenshot thumbs ka adhoora tab-role hataya (aria-pressed use hota
  hai); download tabs ko aria-controls/labelledby mile; nav toggle ko
  aria-controls mila.
- Bug fix: index.astro mein Layout self-closing tha, is liye Nav/main/
  Footer </html> ke BAAD render ho rahe the (invalid HTML) — ab sab
  Layout ke andar hai.
- AdSense script par fetchpriority="low" taake ads page content se
  bandwidth na chheenen. NOTE: AdSense third-party script ke saath
  mobile Performance 99 ki guarantee nahi di ja sakti — lab score
  network/throttling par bhi depend karta hai; ye batch har woh
  cheez fix karta hai jo code se fix ho sakti hai.
- Local build verified: 24 pages, koi missing local asset nahi (icons
  ke favicon files sirf local copy mein missing hain, remote par
  maujood hain), har page ka exactly ek <html> root hai.

## 2026-10-24 — PageSpeed round 2 (CLS diagnosis + contrast/link fixes)
- PSI diagnosis (live, round-1 version): Performance drop ki asli wajah
  CLS thi, na ke images ya AdSense. Mobile: FCP 3.2s, LCP 4.0s, TBT
  0ms, CLS 0.654; Desktop: FCP 0.8s, LCP 0.9s, TBT 0ms, CLS 0.731.
  AdSense third-party sirf 71ms main-thread tha; render-blocking CSS
  sirf 5.7 KB tha. CLS ka sab se bara source DownloadWidget hai: GitHub
  API fetch ke baad widget ~80px se ~500px tak phailta hai aur neeche
  ka page dhakel deta hai.
- Fix: .dl-widget ko reserved height mili (desktop 480px, mobile
  560px — mobile par buttons stack hote hain) taake widget aane par
  neeche ka content na hile.
- Contrast: --green-dark #16a34a -> #15803d (white text ratio 3.3 se
  5.0 hua); .btn-primary:hover #166534; .req-tab.active ab bright
  green (#22c55e, ratio 2.3) ki jagah dark green use karta hai.
- Identical links: DownloadWidget ke har "Download" button ko ab
  aria-label mila hai ("Download for Windows (.msi Installer)" waghera)
  — pehle sab links ka naam ek jaisa tha magar manzil alag thi.
- Prose links: ab #4ade80 + bold + underline (sirf rang par inhisar
  khatam).
- Responsive images: blog covers ke 600px variants (28-43 KB) aur
  srcset (cards + hero); screenshot thumbs ke 160px WebP variants
  (0.5-1.4 KB, pehle 10-39 KB).
- vercel.json: Cross-Origin-Opener-Policy: same-origin header add hua
  (PSI ka COOP audit). Baqi Best Practices audits (CSP unsafe-inline,
  HSTS includeSubDomains, Trusted Types, Baseline) ke liye bari refactor
  chahiye (inline scripts/styles ko external karna) — wo agla step hai,
  is batch mein nahi.

## CLS round 3 (2026-10-24, pushed <pending>)
- PSI (round 2 live) phir bhi: mobile CLS 0.656, desktop 0.731 —
  culprit poora <body> tha (0.654/0.731), hero CTA sirf 0.003. Matlab
  page-level shift tha, kisi ek button ka nahi. Desktop par PSI ne
  carousel ki main image (#qs-shot-img) ko "unsized" bhi flag kiya,
  jabke us par width/height attributes the.
- Asal fix: DownloadWidget ab BUILD time par server-render hota hai
  (frontmatter mein GitHub releases API fetch, buttons initial HTML
  mein). Client-side fetch sirf fallback hai (agar build-time fetch
  fail ho — rate limit waghera). Visitor ka OS group sirf highlight
  hota hai (class + "Your OS" badge + primary buttons) — order change
  nahi hota, kyunki reorder phir se shift paida karta.
  NOTE: is wajah se visitor ka OS group ab pehle number par nahi
  aata, highlight hota hai (windows/macos/linux fixed order).
- Screenshots carousel: main image lazy se eager + fetchpriority high
  wapas (ye pehle eager thi, round 1 mein lazy ki thi), CSS mein
  aspect-ratio: 16/9 add (attributes ke saath belt-and-braces), aur
  4 naye 640x360 WebP variants (app-*-640.webp, 3.8-13 KB) + srcset —
  mobile par 1280w file ki jagah 640w load hogi (PSI image-delivery
  flag 35 KB ka tha).
- Local build verify: / aur /download dono par 3 OS groups + version
  "1.0.1 • Released October 17, 2026" initial HTML mein maujood;
  "Loading latest version…" nahi raha.
