import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tiempoconstrucciones.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: [sitemap()]
});
