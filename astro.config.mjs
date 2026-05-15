import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gauravjoshi08x.github.io',
  base: '/LinkWave/',
  output: 'static',
  integrations: [sitemap()]
});