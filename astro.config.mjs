// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/', // or '/repo-name/' if using GitHub Pages directly
});
