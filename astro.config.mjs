// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://YMuehlhaeuser.github.io', // Replace with your GitHub username
  integrations: [mdx(), sitemap()],
  output: 'static',
});
