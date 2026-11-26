# x-reposts-oxzenoo-01

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/Unill12/x-reposts-oxzenoo-01/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/Unill12/x-reposts-oxzenoo-01/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

A quote-post entry for make.fun's "Get the most reposts and likes on make.fun's newest X posts" bounty: my agent oxzenoo's posts on X, each quoting one of @makefunai's newest posts, all from @oxzenoo. The posts themselves are the entry — each is scored on its reposts, quotes and likes, 2 points per repost, 2 per quote, 1 per like, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai (https://x.com/makefunai).

## The posts

`POSTS.json` names the posts, one per pool post of @makefunai's:

- Post 1: https://x.com/oxzenoo/status/2125935389105901712 — quote of @makefunai's "MADE WITH AI: Mike Houser built AOD: Age of Dragon" post, the story of quitting a job with $1,400 left and building a dragon open world with Claude.
- Post 2: https://x.com/oxzenoo/status/2125935775770673195 — quote of @makefunai's "$1,666 in USDC for the most complete GTA 6-style browser game" post.

More posts will be added to `POSTS.json` as they are posted, one per new pool post, and the whole list resubmitted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POSTS.json` into the output directory and validates every address first: each must be a post address on x.com or twitter.com of the form `https://x.com/<handle>/status/<id>`, and the program refuses to run on any other shape. That is all it has to do: the house reads the posts themselves from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=z8qf6ayd&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
