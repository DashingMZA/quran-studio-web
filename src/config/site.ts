/**
 * Quran Studio — THE single source of truth for all changeable site data.
 *
 * SEO, URLs, social links, verification codes, analytics — EVERYTHING lives
 * here. Edit this file and the whole site updates. Nothing is hardcoded
 * anywhere else.
 */

// ---------- Site ----------
export const SITE_URL = "https://quranstudio.bond";
export const SITE_NAME = "Quran Studio";
export const SITE_BIOINFO = "Quran Studio is a modern Desktop application that empowers users to create beautiful, shareable Quranic videos optimized for YouTube, Instagram Reels, and more.";
/** Web app hosted on the app subdomain */
export const APP_URL = "https://app.quranstudio.bond";
export const SITE_DOMAIN = "QuranStudio.bond";

// ---------- Author ----------
export const AUTHOR_NAME = "Zaheer Ahmad";
export const AUTHOR_GITHUB = "https://github.com/DashingMZA";

// ---------- GitHub repo ----------
export const GITHUB_REPO = "https://github.com/DashingMZA/quran-studio";
export const GITHUB_RELEASES = `${GITHUB_REPO}/releases`;
export const GITHUB_LICENSE = `${GITHUB_REPO}/blob/master/LICENSE`;
export const GITHUB_REPOURL = "DashingMZA/quran-studio";
export const GITHUB_REPOOWNER = "DashingMZA";
export const GITHUB_REPONAME = "quran-studio";

// ---------- Support / Donations ----------
export const SUPPORT_KOFI = "https://ko-fi.com/dashingmza";
export const SUPPORT_COFFEE = "https://buymeacoffee.com/dashingmza";
export const SUPPORT_GUMROAD = "https://dashingmza.gumroad.com/coffee";

// ---------- Social links (footer icons) ----------
// Fill in your profile URLs; empty string = icon hidden.
export const SOCIALS: { name: string; url: string; icon: string }[] = [
  { name: "GitHub", url: "https://github.com/DashingMZA", icon: "/social_media/github.svg" },
  { name: "X", url: "https://x.com/Dashing_ZB", icon: "/social_media/x.svg" },
  { name: "YouTube", url: "", icon: "/social_media/youtube.svg" },
  {name: "Instagram", url: "https://www.instagram.com/dashing.mza", icon: "/social_media/instagram.svg",},
  { name: "Facebook", url: "https://www.facebook.com/dashing.mza", icon: "/social_media/facebook.svg",},
  { name: "TikTok", url: "https://www.tiktok.com/@dashing.mza", icon: "/social_media/tiktok.svg",},
  { name: "Telegram", url: "", icon: "/social_media/telegram.svg" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mzaheera/", icon: "/social_media/linkedin.svg",},
];

// ---------- Social preview image ----------
// URL of the image shown when sharing links on Facebook/X.
// Must be an absolute URL. Empty = no image in link previews.
// Verified 2026-11-02 against the repo itself (public/screenshots):
// quran-studio.png exists there at 1920x1080.
export const SOCIAL_IMAGE = `${SITE_URL}/screenshots/quran-studio.png`;
/** Google Analytics 4 measurement ID — paste your ID here (e.g. "G-XXXXXXXXXX"). Empty = no tracking. */
export const GA_ID = "G-0X473QG59M";

// ---------- Google AdSense -----------
// Publisher client ID (looks like "ca-pub-XXXXXXXXXXXXXXXX") from
// AdSense → Account → Settings → Account information. Empty = the
// AdSense script is not loaded. BaseHead puts the script in the head
// of every public page (never on admin/account/checkout/auth pages).
// NOTE: the ads.txt line in ADS_TXT above must carry the SAME
// publisher number, or AdSense cannot verify the site.
export const ADSENSE_CLIENT = "ca-pub-8198067510150459";

// AdSense consent gating — keep this FALSE until AdSense approval is
// complete. Google's verification crawler does not click the consent
// banner, so it must see the AdSense code snippet in the page.
// When TRUE: the AdSense script loads ONLY after the visitor accepts
// cookies (same "qs-consent" choice as GA4, see CookieConsent.astro).
// Visitors who decline (or have not chosen yet) never load AdSense —
// no ad requests, no third-party weight, and PageSpeed measures the
// pre-consent page. Flip to true after approval, then redeploy.
// (Requires the consent banner, i.e. GA_ID set, to ever load ads.)
export const ADSENSE_REQUIRE_CONSENT = false;

// ---------- ads.txt ----------
// Paste your ads.txt content here (e.g. "google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0").
// Empty = /ads.txt returns 404. One entry per line.
export const ADS_TXT = `google.com, pub-8198067510150459, DIRECT, f08c47fec0942fa0`;

// ---------- Webmaster-tools verification ----------
// Paste each code; empty = tag omitted.
export const SITE_VERIFICATION = {
  google: "3xxCnAb14rERW6P1vc4U-9lFc7d7O84Yo-jzhKK",
  bing: "226ACDBF2B991631F75F2B286ADFF9C0",
  pinterest: "7ca3d9145deeae451ed68ef63f7ef5e5",
  yandex: "",
};

// ---------- SEO defaults ----------
// Home-page SEO, researched 2026-11-02 from competitor titles/descriptions
// (Quran reels / video maker apps) and this site's own content: the search
// themes are "Quran video maker", "Quran recitation videos", "Quran reels",
// "YouTube / Reels / TikTok", "word-by-word highlight", "reciter audio",
// "translation", "HD MP4 export", "free, open source, no account".
// All text here is English. The Urdu version of the site (/ur) keeps its own
// hreflang alternate (canonicalUrlur below); it is not English text.
/** Full SEO prop set expected by src/layouts/Layout.astro */
export const DEFAULT_SEO = {
  title: "Quran Studio — Free Quran Recitation Video Maker",
  description:
    "Create free Quran recitation videos: pick a reciter, style verses, add translation, and export HD MP4 for YouTube, Reels and TikTok. Open source, no account.",
  keywords:
    "Quran video maker, Quran recitation video maker, Quran reels maker, Quran videos for YouTube, Islamic video maker, Quran Shorts maker, Quran recitation videos, word by word Quran video, Quran video editor, free Quran video maker, open source Quran app, Quran MP4 export, Instagram Reels Quran, TikTok Quran videos, Quran translation video, HD Quran videos, desktop Quran video app, Quran Studio",
  themeColor: "#0a0a0a",
  canonicalUrl: SITE_URL,
  canonicalUrlen: SITE_URL,
  canonicalUrlur: `${SITE_URL}/ur`,
  canonicalUrldefault: SITE_URL,
  ogtitle: "Quran Studio — Free Quran Recitation Video Maker",
  ogdescription:
    "Quran Studio is a free, open-source desktop and web app to create Quran recitation videos. Pick a reciter, style the verses, add translation, and export HD MP4 for YouTube, Instagram Reels and TikTok — no account needed.",
  ogurl: SITE_URL,
  ogsitename: SITE_NAME,
  oglocale: "en_US",
  oglocalealternate: "ur_PK",
  ogtype: "website",
  ogupdatedtime: "2026-11-02T00:00:00Z",
  // Files in this repo's public/screenshots (verified 2026-11-02, 1920x1080).
  ogimage: `${SITE_URL}/screenshots/quran-studio1.png`,
  ogimagealt: "Quran Studio — Free Quran Recitation Video Maker",
  ogimagetype: "image/png",
  ogimagewidth: "1920",
  ogimageheight: "1080",
  twittercard: "summary_large_image",
  twittertitle: "Quran Studio — Free Quran Recitation Video Maker",
  twitterdescription:
    "Quran Studio is a free, open-source desktop and web app to create Quran recitation videos. Pick a reciter, style the verses, add translation, and export HD MP4 for YouTube, Instagram Reels and TikTok — no account needed.",
  twitterimage: `${SITE_URL}/screenshots/quran-studio4.png`,
  twitterimagealt: "Quran Studio — Free Quran Recitation Video Maker",
  twittersite: "@Dashing_ZB",
  twittercreator: "@Dashing_ZB",
};

export type SeoProps = typeof DEFAULT_SEO;
