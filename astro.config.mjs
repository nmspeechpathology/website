// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',

  // or '/repo-name/' if using GitHub Pages directly
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  }
});