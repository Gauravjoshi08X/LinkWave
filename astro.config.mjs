import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gauravjoshi08X.github.io', // Replace with your GitHub username
  base: '/', // Replace with your repository name
  output: 'static',
  build: {
    assets: 'assets'
  }
});