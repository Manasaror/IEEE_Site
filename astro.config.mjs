import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with the production domain once available.
  site: 'https://ieee-gbpiet.example.org',

  // Astro follows a static-first philosophy. This can be revisited
  // if server-rendered routes (e.g. a future Member Portal) are needed.
  output: 'static',

  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],

  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@data': '/src/data',
        '@lib': '/src/lib',
        '@utils': '/src/utils',
        '@styles': '/src/styles',
        '@types': '/src/types',
        '@assets': '/src/assets',
      },
    },
  },
});
