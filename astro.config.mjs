import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gomezgoiri.net',
  integrations: [sitemap()],
  build: {
    format: 'file',
  },
});
