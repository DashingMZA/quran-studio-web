import { DEFAULT_SEO, SITE_URL, type SeoProps } from "../config/seo";

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
 * Everything comes from src/config/seo.ts; per-page title/description/path
 * only override what they need to.
 */
export function seo({ title, description, path }: SeoInput): SeoProps {
  const cleanPath = path === "/" ? "" : path;
  const url = `${SITE_URL}${cleanPath}`;
  return {
    ...DEFAULT_SEO,
    title: title ?? DEFAULT_SEO.title,
    description: description ?? DEFAULT_SEO.description,
    canonicalUrl: url,
    canonicalUrlen: url,
    canonicalUrlur: `${SITE_URL}/ur${cleanPath}`,
    canonicalUrldefault: url,
    ogtitle: title ?? DEFAULT_SEO.ogtitle,
    ogdescription: description ?? DEFAULT_SEO.ogdescription,
    ogurl: url,
    ogimagealt: title ?? DEFAULT_SEO.ogimagealt,
    twittertitle: title ?? DEFAULT_SEO.twittertitle,
    twitterdescription: description ?? DEFAULT_SEO.twitterdescription,
    twitterimagealt: title ?? DEFAULT_SEO.twitterimagealt,
  };
}

/** SEO props for the homepage — pure defaults from src/config/seo.ts. */
export function homeSeo(): SeoProps {
  return seo({ path: "/" });
}
