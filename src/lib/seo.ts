const SITE = "https://quranstudio.cyou";
const OG_IMAGE = `${SITE}/quran-studio.png`;

interface SeoInput {
  title: string;
  description: string;
  /** URL path, e.g. "/download" */
  path: string;
}

/** Builds the full SEO prop set expected by src/layouts/Layout.astro */
export function seo({ title, description, path }: SeoInput) {
  const url = `${SITE}${path}`;
  return {
    title,
    description,
    themeColor: "#0a0a0a",
    canonicalUrl: url,
    canonicalUrlen: url,
    canonicalUrlur: `${SITE}/ur${path}`,
    canonicalUrldefault: url,
    ogtitle: title,
    ogdescription: description,
    ogurl: url,
    ogsitename: "Quran Studio",
    oglocale: "en_US",
    ogtype: "website",
    ogupdatedtime: "2026-10-17T00:00:00Z",
    ogimage: OG_IMAGE,
    ogimagealt: title,
    ogimagetype: "image/png",
    ogimagewidth: "1920",
    ogimageheight: "1038",
    oglocalealternate: "ur_PK",
    twittercard: "summary_large_image",
    twittertitle: title,
    twitterdescription: description,
    twitterimage: OG_IMAGE,
    twitterimagealt: title,
  };
}
