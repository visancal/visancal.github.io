# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies (requires Node ≥ 24)
npm run dev          # dev server (alias: npm run serve)
npm run build        # production build → outputs to docs/
npm run preview      # preview the production build locally
```

There are no tests in this project.

## Architecture

This is an **Astro 6 + TypeScript personal portfolio site** (vicentsanjaime.net) deployed as a GitHub Pages static site. The production build outputs to `docs/` (not `dist/`), which is what GitHub Pages serves from the `master` branch.

### Stack
- **Astro 6** — static site generator with `ClientRouter` (View Transitions) enabled; zero JS by default, vanilla `<script>` tags for interactivity
- **TypeScript** — strict mode via `astro/tsconfigs/strict`
- **Material Design Icons** (CDN `@mdi/font`) — icon font, `mdi-*` class names
- **Google Fonts** — Inter (body) + Playfair Display (headings)
- No UI framework, no CSS utility library — plain scoped CSS inside `.astro` files

### Data flow
All content (employment, education, skills, projects) is static TypeScript in [src/data/content.ts](src/data/content.ts). To update bio content, employment history, skills, or the project list, edit that file directly.

### Images
Two image locations serve different purposes:
- `src/assets/` — images imported directly into `.astro` components and processed by Astro's image pipeline (carousels in `HomeCarousel.astro` and `BannerImages.astro`)
- `public/img/` — static images referenced as URL strings from `content.ts` (`/img/employment/…`, `/img/education/…`); served as-is

### Layout patterns

**Home page** — `position: relative` wrapper → HomeCarousel (`position: absolute; z-index: 0`) sits behind Header (`z-index: 100`). The header has a semi-transparent backdrop-blur background so the carousel shows through.

**Background / Projects pages** — flex column `height: 100vh`: Header (fixed height) → BannerImages (140px / 50px mobile) → scrollable `<main>` (`flex: 1; overflow-y: auto`). The banner gets a drop shadow when `main.scrollTop > 5` via a vanilla JS `scroll` listener that toggles `.vs-banner--scrolled`.

**Projects timeline** — CSS flexbox alternating: even items (`flex-direction: row`) put the card on the right; odd items (`flex-direction: row-reverse`) put it on the left. The center line is a `::before` pseudo-element on `.vs-timeline`. On mobile (`< 600px`) the opposite-side chips are hidden and `TimelineCard` shows them internally.

### View Transitions (ClientRouter)
`Layout.astro` includes `<ClientRouter />` for SPA-like navigation with a slide animation. Any vanilla JS that runs on page load **must** listen for `astro:page-load` instead of `DOMContentLoaded`:

```js
document.addEventListener('astro:page-load', initMyFeature);
```

### SEO
`Layout.astro` accepts per-page SEO props — pass them from every page:
```astro
<Layout
  title="Page Title | Vicent Sanjaime"
  description="Page description"
  ogImage="https://vicentsanjaime.net/img/home/intro.webp"
  canonicalPath="/background"
>
```
The layout renders full OG tags, Twitter Card meta, canonical `<link>`, and a JSON-LD `Person` schema.

### CSS design tokens (in Layout.astro `is:global`)
```css
--color-bg:        #F5EFE3   /* warm cream background */
--color-surface:   #FDFAF4   /* lighter cream for cards */
--color-text:      #1A1008   /* warm near-black */
--color-text-sec:  #6E6760   /* warm gray */
--color-accent:    #D97757   /* coral / terracotta */
--color-accent-dk: #B85E3A   /* darker coral for hover */
--color-border:    #E8E2D6   /* warm light border */
--font-main:       'Inter', system-ui, sans-serif
--font-display:    'Playfair Display', Georgia, serif
--radius-card:     16px
--radius-pill:     9999px
--radius-sm:       8px
--shadow-card:     0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)
```

Legacy aliases (still used in some components): `--color-primary` = `#1A1008`, `--color-secondary` = `#D97757`, `--color-link` = `#D97757`.

### Responsive breakpoint
Mobile is `max-width: 600px` — hamburger menu replaces desktop nav, banner height shrinks to 50px, social bar in header is hidden (it only shows on the home page anyway), footer is hidden, timeline collapses to single column.

### Deployment
```bash
npm run build   # outputs to docs/
git add docs/
git commit -m "chore: build [skip ci]"
git push        # GitHub Pages serves docs/ on master branch
```
