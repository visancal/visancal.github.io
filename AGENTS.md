# AGENTS.md

Guidance for AI coding agents (Claude Code, Codex, Cursor…) working in this repository.
`CLAUDE.md` imports this file, so keep this as the single source of truth.

## Commands

```bash
pnpm install          # install dependencies (Node ≥ 24, see .nvmrc)
pnpm run dev          # dev server (alias: pnpm run serve)
pnpm run build        # production build → docs/ (needs network: fonts are fetched at build time)
pnpm run preview      # serve the production build locally
```

There are no tests or linters. Verify changes with `pnpm run build` and by looking at the
pages in `pnpm run preview` (desktop and ≤ 600px mobile width).

## Project

Personal portfolio of Vicent Sanjaime (https://vicentsanjaime.net). **Astro 7 + TypeScript
(strict)**, fully static, deployed on GitHub Pages from the `docs/` folder of `master`
(not `dist/`).

Principles: keep it simple, fast and dependency-free.
- Zero JS by default; small vanilla `<script>` tags only where needed. No UI framework, no CSS library.
- Plain scoped CSS in `.astro` files; shared styles and design tokens in `src/styles/global.css`.
- No third-party requests at runtime (fonts self-hosted, icons inline). The only exception is the basemap tiles on `/trips`.
- The only heavy dependency is deck.gl, and it is bundled only into the Trips page.

## Structure

```
src/
  data/content.ts        All site content: SITE_URL, socials, employment, education, skills,
                         languages, projects, trips, highlights, wishlist
  data/icons.ts          SVG path data for <Icon> (24×24 viewBox)
  layouts/Layout.astro   <head>: SEO/OG/JSON-LD, fonts, theme picker, ClientRouter
  styles/global.css      Design tokens, themes, reset and shared classes
  scripts/rotator.ts     Shared cross-fade + lazy image loader (carousel and banners)
  components/
    Header.astro         Nav (desktop + mobile drawer), social bar on home
    Footer.astro         Social links + credit (hidden on mobile)
    HomeCarousel.astro   Full-screen home photos + hero text
    BannerImages.astro   Rotating banner strip + shadow when <main> scrolls
    SectionBackground    Titled section (h2) on /background
    EducationCard / EmploymentCard / TimelineCard / ProjectMeta
    Icon.astro           <Icon name="calendar" /> inline SVG
    SocialLinks.astro    Renders `socials` from content.ts
  pages/
    index · background · projects · trips (.astro)
    llms.txt.ts · llms-full.txt.ts   AI-readable site content (see below)
public/
  img/                   Static images served as-is (pre-optimised WebP)
  robots.txt, CNAME, favicon.ico, .nojekyll
docs/                    Build output — generated, never edit by hand
```

## Editing content

All content lives in `src/data/content.ts`; pages, JSON-LD and the `llms*.txt` files read
from it. Bio prose is the exception: it is written in `src/pages/background.astro` **and**
`src/pages/llms-full.txt.ts` — update both. The JSON-LD `Person` schema in `Layout.astro`
(job title, employer, `sameAs`, `knowsAbout`) also needs a manual update when the role or
profiles change.

## Images

All images live in `public/img/`, referenced by URL string. They are not processed by Astro,
so add them already optimised: WebP, desktop photos ≤ 1920px wide (~300 KB), mobile variants
(`*-m.webp`) ~800px wide.

The home carousel and banners put only the first image in the HTML (the LCP image).
The rest carry `data-src` / `data-srcset` and `rotator.ts` loads each one a slide ahead.

## Layout patterns

- **Home** — `HomeCarousel` (absolute, behind) + `Header` (semi-transparent with backdrop blur, on top). There is one `<h1>` in the hero, and the slides only hold images and photo credits.
- **Background / Projects / Trips** — global `.vs-page` flex column (`100dvh`): Header → BannerImages (140px, 50px on mobile; not on Trips) → scrollable `<main class="vs-content">` → Footer.
- **Projects timeline** — `<ol>` of flex rows. Even items have the card on the right, odd items (`.vs-item--left`, `row-reverse`) on the left, and a centre line from `.vs-timeline::before`. `ProjectMeta` (date/company/R&D chips) renders opposite the card on desktop and inside `TimelineCard` on mobile.
- **Trips** — deck.gl `GlobeView` (3D, default) / `MapView` (2D) toggle, remembered in `localStorage`. The basemap is CARTO tiles on the production domain only (the API key is domain-restricted) and OpenStreetMap everywhere else. Marker data is passed through `data-*` attributes.

## Client-side JS and View Transitions

`<ClientRouter />` is enabled, so bundled `<script>` modules run **once** per session, not
once per page. Any per-page setup must:

```js
document.addEventListener('astro:page-load', init);           // runs after every navigation
document.addEventListener('astro:before-swap', cleanup);      // clear timers, observers, WebGL
```

## Styling

- Tokens in `global.css`: `--color-bg`, `--color-surface`, `--color-text`, `--color-text-sec`, `--color-accent` (+ `-dk`, `-rgb`), `--color-border`, `--radius-card|pill|sm`, `--shadow-card(-hover)`. `--font-main` (Inter) and `--font-display` (Playfair Display) come from the Astro Fonts API (`astro.config.mjs`). Add a weight there before using it.
- Two colour themes, warm (default) and `:root[data-theme='sage']`, picked at random once per browser session by an inline script in `Layout.astro`. Always use tokens, never hard-coded theme colours.
- Shared classes: `.vs-page`, `.vs-content`, `.vs-page-title`, `.vs-intro-text`, `.vs-card`, `.vs-card-title`, `.vs-card-link`, `.vs-chip` (+ `--date`, `--rd`, `--tech`), `.vs-icon`.
- Scoped styles do not reach child components. Use `.parent :global(.child-class)` to style markup rendered by `SocialLinks`, `Icon` or `ProjectMeta`.
- Mobile breakpoint: `max-width: 600px`. Below it the hamburger drawer replaces the nav, the banner is 50px, the footer and header social bar are hidden, and the timeline becomes one column.
- Respect `prefers-reduced-motion` for any new animation.

## SEO and AI discoverability

Every page passes SEO props to `Layout`:

```astro
<Layout title="Page | Vicent Sanjaime" description="…" canonicalPath="/page" ogImage="…" schemas={[…]}>
```

`Layout` renders the canonical URL, Open Graph and Twitter tags and the JSON-LD `Person` schema
(plus any extra `schemas`). The sitemap comes from `@astrojs/sitemap`.

`/llms.txt` (index) and `/llms-full.txt` (all content as plain text) follow https://llmstxt.org/
and are linked from `robots.txt`. They are generated from `content.ts`. **When you add a page,
add it to the Pages list in `llms.txt.ts`**, and to the Header `navItems`.

## Deployment

Pushing to `master` runs `.github/workflows/build.yml`, which installs dependencies, runs the
build and commits `docs/` as `chore: build [skip ci]`. Pull requests to `master` only build.
To publish by hand: `pnpm run build`, then commit `docs/`.

## Agent skills

`.agents/skills/` holds installed agent skills (tracked in `skills-lock.json`), currently
`frontend-design` from `anthropics/skills`. Keep new UI consistent with the existing palette
and typography above.
