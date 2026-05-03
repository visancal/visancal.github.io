# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server (alias: npm run serve)
npm run build        # production build → outputs to docs/
npm run preview      # preview the production build locally
```

There are no tests in this project.

## Architecture

This is an **Astro 4 + TypeScript personal portfolio site** (vicentsanjaime.net) deployed as a GitHub Pages static site. The production build outputs to `docs/` (not `dist/`), which is what GitHub Pages serves from the `master` branch.

### Stack
- **Astro 4** — static site generator; zero JS by default, vanilla `<script>` tags for interactivity
- **TypeScript** — strict mode via `astro/tsconfigs/strict`
- **Material Design Icons** (CDN `@mdi/font`) — icon font, `mdi-*` class names
- **Google Fonts** — Roboto (body) + Special Elite (headings)
- No UI framework, no CSS utility library — plain scoped CSS inside `.astro` files

### Data flow
All content (employment, education, skills, projects) is static TypeScript in [src/data/content.ts](src/data/content.ts). To update bio content, employment history, skills, or the project list, edit that file directly.

### Directory structure
```
src/
├── data/content.ts          # all resume/portfolio data + TypeScript interfaces
├── layouts/Layout.astro     # HTML shell, global CSS variables, fonts
├── components/
│   ├── Header.astro         # top bar + mobile drawer (vanilla JS toggle)
│   ├── Footer.astro         # social links + credit line
│   ├── HomeCarousel.astro   # full-viewport image carousel (home page)
│   ├── BannerImages.astro   # compact banner carousel (background/projects)
│   ├── SectionBackground.astro  # titled section wrapper (slot)
│   ├── EducationCard.astro
│   ├── EmploymentCard.astro
│   └── TimelineCard.astro
└── pages/
    ├── index.astro           # Home — full-viewport carousel behind header
    ├── background.astro      # Bio, Skills, Education, Employment, Languages
    └── projects.astro        # Alternating timeline of projects + Footer
public/
├── favicon.ico
├── robots.txt
├── CNAME                    # vicentsanjaime.net (GitHub Pages custom domain)
└── img/                     # pre-optimized .webp images served as static files
    ├── home/                # intro.webp, intro2.webp
    ├── back/                # back1–6.webp (banner carousels)
    ├── employment/          # prodevelop, sener, cide
    └── education/           # upv, uv
docs/                        # build output (committed for GitHub Pages)
```

### Layout patterns

**Home page** — `position: relative` wrapper → HomeCarousel (`position: absolute; z-index: 0`) sits behind Header (`z-index: 100`). The header has a semi-transparent background so the carousel shows through.

**Background / Projects pages** — flex column `height: 100vh`: Header (fixed height) → BannerImages (140px / 50px mobile) → scrollable `<main>` (`flex: 1; overflow-y: auto`). The banner gets a drop shadow when `main.scrollTop > 5` via a vanilla JS `scroll` listener that toggles `.vs-banner--scrolled`.

**Projects timeline** — CSS flexbox alternating: even items (`flex-direction: row`) put the card on the right; odd items (`flex-direction: row-reverse`) put it on the left. The center line is a `::before` pseudo-element on `.vs-timeline`. On mobile (`< 600px`) the opposite-side chips are hidden and `TimelineCard` shows them internally.

### CSS design tokens (in Layout.astro `is:global`)
```css
--color-primary:   #1b237b   /* deep blue */
--color-accent:    #b21b57   /* pink/red  */
--color-secondary: #d03c3b   /* red       */
--color-link:      #005798
--font-main:       Roboto, sans-serif
--font-display:    'Special Elite', sans-serif
```

### Responsive breakpoint
Mobile is `max-width: 600px` — hamburger menu replaces desktop nav, banner height shrinks to 50px, social icons in header are hidden, footer is hidden, timeline collapses to single column.

### Deployment
```bash
npm run build   # outputs to docs/
git add docs/
git commit -m "build"
git push        # GitHub Pages serves docs/ on master branch
```
