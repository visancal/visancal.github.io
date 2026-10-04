import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vicentsanjaime.net',
  output: 'static',
  outDir: 'docs',
  integrations: [
    sitemap({
      // hreflang alternates for the /es/ and /va/ copies of every page (see src/data/i18n.ts)
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es', va: 'ca' } },
    }),
  ],
  // Self-hosted at build time: no third-party font requests at runtime
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-main',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Playfair Display',
      cssVariable: '--font-display',
      weights: ['500 600'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
