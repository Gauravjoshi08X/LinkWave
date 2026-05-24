import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://linkwaveedu.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
  vite: {
    build: {
      cssMinify: true,
      assetsInlineLimit: 4096
    }
  }
});