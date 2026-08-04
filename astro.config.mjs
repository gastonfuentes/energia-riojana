// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Required for canonical URLs, absolute Open Graph image paths and the
  // sitemap. Without it Astro cannot know its own origin at build time.
  site: 'https://energia-riojana.com.ar',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap({
      // Component previews and the post-submit confirmation are real routes
      // that must never rank. They carry noindex too — this keeps them out of
      // the sitemap so Google is not invited to crawl them in the first place.
      filter: (page) =>
        !/\/(circle-preview|icon-preview|type-preview|success)\/?$/.test(page),
    }),
  ],
});
