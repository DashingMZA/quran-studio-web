import {
  SITE_URL,
  SITE_NAME,
  AUTHOR_NAME,
  APP_URL,
  GITHUB_REPO,
  GITHUB_RELEASES,
  GITHUB_LICENSE,
} from "../config/site";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const blogList = posts
    .map(
      (p) =>
        `- [${p.data.title}](${SITE_URL}/blog/${p.id}): ${p.data.description}`
    )
    .join("\n");
  const txt = `# ${SITE_NAME}

> ${SITE_NAME} is a free, open-source app to create beautiful Quran recitation videos. Pick a reciter, style the verses, export in HD.

${SITE_NAME} is a web and desktop-ready editor for creating Quran recitation videos. It combines Quran text, translations, timed recitation audio, typography controls, and visual backgrounds into an exportable MP4 canvas workflow.

- Site: ${SITE_URL}
- Web app: ${APP_URL}
- GitHub: ${GITHUB_REPO}
- Releases: ${GITHUB_RELEASES}
- License: GPL-3.0 (${GITHUB_LICENSE})
- Author: ${AUTHOR_NAME}

## Pages

- [Home](${SITE_URL}): Create beautiful Quran recitation videos in minutes.
- [Features](${SITE_URL}/features): Surah picker, famous reciters, auto-synced verses, typography, backgrounds, Urdu translation, HD MP4 export.
- [How It Works](${SITE_URL}/how-it-works): From verses to video in four steps.
- [Download](${SITE_URL}/download): Free download for Windows, macOS, and Linux.
- [FAQ](${SITE_URL}/faq): Pricing, support, reciters, exports, offline use.
- [Blog](${SITE_URL}/blog): Guides on making Quran recitation videos, Reels, fonts, backgrounds, and growing a Quran YouTube channel.
- [About](${SITE_URL}/about): About ${SITE_NAME}.
- [Contact](${SITE_URL}/contact): Bug reports and feature requests.
- [Privacy Policy](${SITE_URL}/privacy-policy): How user data is handled.
- [Terms of Use](${SITE_URL}/terms-of-use): Terms for using the site and software.
- [Disclaimer](${SITE_URL}/disclaimer): Accuracy of Quranic content and third-party services.

## Blog

${blogList}
`;
  return new Response(txt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
