import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    assetsDir: '',
    minify: false,
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
});
