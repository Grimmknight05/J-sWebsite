import { defineConfig } from 'vite';

// Use relative asset paths so the site works whether served from root or a subpath
export default defineConfig({
  base: './',
});
