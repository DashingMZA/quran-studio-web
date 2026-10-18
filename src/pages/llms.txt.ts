import {
  SITE_URL,
  SITE_NAME,
  AUTHOR_NAME,
  APP_URL,
  GITHUB_REPO,
  GITHUB_RELEASES,
  GITHUB_LICENSE,
} from "../config/site";

export async function GET() {
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
- [About](${SITE_URL}/about): About ${SITE_NAME}.
- [Contact](${SITE_URL}/contact): Bug reports and feature requests.
`;
  return new Response(txt, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
