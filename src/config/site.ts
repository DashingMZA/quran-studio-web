/**
 * Quran Studio — THE single source of truth for all changeable site data.
 *
 * SEO, URLs, social links, verification codes, analytics — EVERYTHING lives
 * here. Edit this file and the whole site updates. Nothing is hardcoded
 * anywhere else.
 */

// ---------- Site ----------
export const SITE_URL = "https://quranstudio.cyou";
export const SITE_NAME = "Quran Studio";
export const SITE_BIOINFO = "Quran Studio is a modern Desktop application that empowers users to create beautiful, shareable Quranic videos optimized for YouTube, Instagram Reels, and more.";
/** Web app hosted on the app subdomain */
export const APP_URL = "https://app.quranstudio.cyou";
export const SITE_DOMAIN = "QuranStudio.cyou";

// ---------- Author ----------
export const AUTHOR_NAME = "Zaheer Ahmad";
export const AUTHOR_GITHUB = "https://github.com/DashingMZA";

// ---------- GitHub repo ----------
export const GITHUB_REPO = "https://github.com/DashingMZA/quran-studio";
export const GITHUB_RELEASES = `${GITHUB_REPO}/releases`;
export const GITHUB_LICENSE = `${GITHUB_REPO}/blob/master/LICENSE`;
export const GITHUB_REPONAME = "DashingMZA/quran-studio";

// ---------- Support / Donations ----------
export const SUPPORT_KOFI = "https://ko-fi.com/dashingmza";
export const SUPPORT_COFFEE = "https://buymeacoffee.com/dashingmza";
export const SUPPORT_GUMROAD = "https://dashingmza.gumroad.com/coffee";

// ---------- Social links (footer icons) ----------
// Fill in your profile URLs; empty string = icon hidden.
export const SOCIALS: { name: string; url: string; icon: string }[] = [
  { name: "GitHub", url: GITHUB_REPO, icon: "/social_media/github.svg" },
  { name: "X", url: "https://x.com/Dashing_ZB", icon: "/social_media/x.svg" },
  { name: "YouTube", url: "", icon: "/social_media/youtube.svg" },
  {name: "Instagram", url: "https://www.instagram.com/dashing.mza", icon: "/social_media/instagram.svg",},
  { name: "Facebook", url: "https://www.facebook.com/dashing.mza", icon: "/social_media/facebook.svg",},
  { name: "TikTok", url: "https://www.tiktok.com/@dashing.mza", icon: "/social_media/tiktok.svg",},
  { name: "Telegram", url: "", icon: "/social_media/telegram.svg" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mzaheera/", icon: "/social_media/linkedin.svg",},
];

// ---------- Social preview image ----------
// URL of the image shown when sharing links on Facebook/X. Empty = no image
// in link previews (only title + description show).
export const SOCIAL_IMAGE = "";
/** Google Analytics 4 measurement ID — paste your ID here (e.g. "G-XXXXXXXXXX"). Empty = no tracking. */
export const GA_ID = "";

// ---------- ads.txt ----------
// Paste your ads.txt content here (e.g. "google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0").
// Empty = /ads.txt returns 404. One entry per line.
export const ADS_TXT = ``;

// ---------- Webmaster-tools verification ----------
// Paste each code; empty = tag omitted.
export const SITE_VERIFICATION = {
  google: "",
  bing: "",
  pinterest: "",
  yandex: "",
};

// ---------- SEO defaults (owner's data — do not change values) ----------
/** Full SEO prop set expected by src/layouts/Layout.astro */
export const DEFAULT_SEO = {
  title: "Quran Studio — Create Beautiful Quran Recitation Videos",
  description: "Quran Studio is a free, open-source app to create beautiful Quran recitation videos. Pick a reciter, style the verses, export in HD.",
  themeColor: "#0a0a0a",
  canonicalUrl: SITE_URL,
  canonicalUrlen: SITE_URL,
  canonicalUrlur: `${SITE_URL}/ur`,
  canonicalUrldefault: SITE_URL,
  ogtitle: "Quran Video Studio is an online tool to create and edit Quran videos.",
  ogdescription: "Quran Studio is a web and desktop-ready editor for creating Quran recitation videos. It combines Quran text, translations, timed recitation audio, typography controls, and visual backgrounds into an exportable MP4 canvas workflow.",
  ogurl: SITE_URL,
  ogsitename: SITE_NAME,
  oglocale: "en_US",
  oglocalealternate: "ur_PK",
  ogtype: "website",
  ogupdatedtime: "2026-10-17T00:00:00Z",
  ogimage: "/screenshots/quran-studio.png",
  ogimagealt: "Quran Studio — Create Beautiful Quran Recitation Videos",
  ogimagetype: "image/png",
  ogimagewidth: "1920",
  ogimageheight: "1038",
  twittercard: "summary_large_image",
  twittertitle: "Create and export professional Quran videos online",
  twitterdescription: "Quran Studio is a web and desktop-ready editor for creating Quran recitation videos. It combines Quran text, translations, timed recitation audio, typography controls, and visual backgrounds into an exportable MP4 canvas workflow.",
  twitterimage: "/screenshots/quran-studio.png",
  twitterimagealt: "Quran Studio — Create Beautiful Quran Recitation Videos",
};

export type SeoProps = typeof DEFAULT_SEO;
