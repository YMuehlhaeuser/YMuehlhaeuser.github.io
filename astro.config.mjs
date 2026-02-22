// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io', // Replace with your GitHub username
  integrations: [mdx(), sitemap()],
  output: 'static',
});
