#!/usr/bin/env node
/**
 * Simple internal link checker — run after `pnpm build`:
 *   pnpm test:links
 * Scans dist/*.html for href/src pointing at site routes and reports
 * any target file that doesn't exist in dist/.
 */
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;

function* htmlFiles(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith(".html")) yield p;
  }
}

function routeToFile(href) {
  // strip query/hash, external links, anchors, special schemes
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || /^(https?:|mailto:|tel:|data:|javascript:)/i.test(clean)) return null;
  if (!clean.startsWith("/")) return null; // relative asset — skip
  if (/\.[a-z0-9]+$/i.test(clean)) return join(DIST, clean.slice(1)); // file asset
  return join(DIST, clean.slice(1), "index.html"); // route
}

let broken = 0;
let checked = 0;
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  const hrefs = new Set();
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) hrefs.add(m[1]);
  for (const href of hrefs) {
    const target = routeToFile(href);
    if (!target) continue;
    checked++;
    if (!existsSync(target)) {
      console.error(`BROKEN: ${href}\n  referenced from ${file.replace(DIST, "dist/")}`);
      broken++;
    }
  }
}
console.log(`checked ${checked} internal links, ${broken} broken`);
process.exit(broken ? 1 : 0);
