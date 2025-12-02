import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tiempoconstrucciones.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
