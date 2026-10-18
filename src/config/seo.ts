/**
 * Quran Studio — central SEO source of truth.
 *
 * ALL SEO data lives here. Every page and the Layout read from this file,
 * so editing these values updates the whole site at once.
 */

export const SITE_URL = "https://quranstudio.cyou";
export const SITE_NAME = "Quran Studio";

/** Full SEO prop set expected by src/layouts/Layout.astro */
export const DEFAULT_SEO = {
  title: "Quran Studio — Create Beautiful Quran Recitation Videos",
  description:
    "Quran Studio is a free, open-source app to create beautiful Quran recitation videos. Pick a reciter, style the verses, export in HD.",
  themeColor: "#0a0a0a",
  canonicalUrl: SITE_URL,
  canonicalUrlen: SITE_URL,
  canonicalUrlur: `${SITE_URL}/ur`,
  canonicalUrldefault: SITE_URL,
  ogtitle: "Quran Video Studio is an online tool to create and edit Quran videos.",
  ogdescription:
    "Quran Studio is a web and desktop-ready editor for creating Quran recitation videos. It combines Quran text, translations, timed recitation audio, typography controls, and visual backgrounds into an exportable MP4 canvas workflow.",
  ogurl: SITE_URL,
  ogsitename: SITE_NAME,
  oglocale: "en_US",
  oglocalealternate: "ur_PK",
  ogtype: "website",
  ogupdatedtime: "2026-10-17T00:00:00Z",
  ogimage: "/quran-studio.png",
  ogimagealt: "Quran Studio — Create Beautiful Quran Recitation Videos",
  ogimagetype: "image/png",
  ogimagewidth: "1920",
  ogimageheight: "1038",
  twittercard: "summary_large_image",
  twittertitle: "Create and export professional Quran videos online",
  twitterdescription:
    "Quran Studio is a web and desktop-ready editor for creating Quran recitation videos. It combines Quran text, translations, timed recitation audio, typography controls, and visual backgrounds into an exportable MP4 canvas workflow.",
  twitterimage: "/quran-studio.png",
  twitterimagealt: "Quran Studio — Create Beautiful Quran Recitation Videos",
};

export type SeoProps = typeof DEFAULT_SEO;
