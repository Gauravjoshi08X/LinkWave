import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'linkwaveedu.com',
  base: '/LinkWave/',
  output: 'static',
  integrations: [sitemap()]
});