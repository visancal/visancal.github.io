# vicentsanjaime.net

Personal website of **Vicent Sanjaime**, a GIS developer and consultant based in Valencia, Spain.
Live at **https://vicentsanjaime.net**.

Static site built with [Astro](https://astro.build) and TypeScript. It ships no UI framework and
no runtime third-party requests, and has four pages:

| Page | Content |
| --- | --- |
| `/` | Full-screen photo carousel and intro |
| `/background` | Bio, skills, education, employment and languages |
| `/projects` | Project timeline |
| `/trips` | Interactive [deck.gl](https://deck.gl) globe of places visited and wishlist |

It also serves [`/llms.txt`](https://vicentsanjaime.net/llms.txt) and
[`/llms-full.txt`](https://vicentsanjaime.net/llms-full.txt) so AI agents can read the site
content ([llmstxt.org](https://llmstxt.org/)).

## Development

Requires Node ≥ 24 and pnpm.

```bash
pnpm install
pnpm run dev       # http://localhost:4321
pnpm run build     # → docs/
pnpm run preview   # serve the build
```

Content (jobs, education, skills, projects, trips, social links) is in
[`src/data/content.ts`](src/data/content.ts). Images are in `public/img/` and should be
optimised WebP files.

## Deployment

GitHub Pages serves the `docs/` folder of `master`. On every push to `master`, a GitHub Action
builds the site and commits `docs/`.

## AI agents

Instructions for coding agents are in [`AGENTS.md`](AGENTS.md). [`CLAUDE.md`](CLAUDE.md)
imports it.
