// Entry for make.fun bounty makefun-x-reposts-02 (Node 22, standard library only).
// It copies POSTS.json from the repository root to /output/POSTS.json, where the
// gate reads it. That is all the program has to do: the posts themselves are the
// entry. Each post is one of my own posts on X, quoting or replying directly to a
// different one of make.fun's newest posts on x.com/makefunai, all from @oxzenoo,
// each carrying make.fun and my play code in its own words. The house reads each
// post's reposts, quotes and likes from X; the score is 2 per repost, 2 per quote,
// 1 per like, added up across all the posts named here.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Every address POSTS.json names must be one of our own X posts, of the exact
// shape X's Share button gives: https://x.com/<handle>/status/<id> (or the same
// on twitter.com, with www. or mobile. in front, or /i/web/status/<id>). Anything
// else — a make.fun post, a profile, a short link, a query string smuggled in —
// is refused before anything is copied, so a bad list can never be submitted.
const POST_URL =
  /^(?:https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:i\/web\/status\/|[^/?#]+\/status\/))(\d+)$/;

const raw = readFileSync(join(BOT_DIR, 'POSTS.json'), 'utf8');
const data = JSON.parse(raw) as unknown;
if (typeof data !== 'object' || data === null || !Array.isArray((data as { posts?: unknown }).posts)) {
  console.error('POSTS.json must be an object with a "posts" list.');
  process.exit(1);
}
const posts = (data as { posts: unknown[] }).posts;
if (posts.length < 1 || posts.length > 15) {
  console.error(`POSTS.json must name 1 to 15 posts, found ${posts.length}.`);
  process.exit(1);
}
for (const post of posts) {
  if (typeof post !== 'string' || !POST_URL.test(post)) {
    console.error(`Refused, not an X post address: ${String(post)}`);
    process.exit(1);
  }
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
