import { DEFAULT_SEO, SITE_URL, type SeoProps } from "../config/site";

interface SeoInput {
  /** Page-specific title; falls back to the site default */
  title?: string;
  /** Page-specific description; falls back to the site default */
  description?: string;
  /** URL path, e.g. "/download". Use "/" for the homepage. */
  path: string;
}

/**
 * Builds the full SEO prop set expected by src/layouts/Layout.astro.
 * Everything comes from src/config/site.ts; per-page title/description/path
 * only override what they need to.
 *
 * Note: og/twitter images are resolved to absolute URLs here because
 * social scrapers (Facebook, X, WhatsApp…) ignore relative image URLs.
 * The raw values in src/config/site.ts stay exactly as the owner gave them.
 */
export function seo({ title, description, path }: SeoInput): SeoProps {
  const cleanPath = path === "/" ? "" : path;
  const url = `${SITE_URL}${cleanPath}`;
  const abs = (u: string) => (u.startsWith("http") ? u : `${SITE_URL}${u}`);
  return {
    ...DEFAULT_SEO,
    title: title ?? DEFAULT_SEO.title,
    description: description ?? DEFAULT_SEO.description,
    canonicalUrl: url,
    canonicalUrlen: url,
    canonicalUrldefault: url,
    ogtitle: title ?? DEFAULT_SEO.ogtitle,
    ogdescription: description ?? DEFAULT_SEO.ogdescription,
    ogurl: url,
    ogimage: abs(DEFAULT_SEO.ogimage),
    ogimagealt: title ?? DEFAULT_SEO.ogimagealt,
    twittertitle: title ?? DEFAULT_SEO.twittertitle,
    twitterdescription: description ?? DEFAULT_SEO.twitterdescription,
    twitterimage: abs(DEFAULT_SEO.twitterimage),
    twitterimagealt: title ?? DEFAULT_SEO.twitterimagealt,
  };
}

/** SEO props for the homepage — pure defaults from src/config/site.ts. */
export function homeSeo(): SeoProps {
  return seo({ path: "/" });
}
