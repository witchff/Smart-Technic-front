import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      hooks: '/src/hooks',
      pages: '/src/pages',
      assets: '/src/components',
      types: '/src/types',
      helpers: '/src/helpers',
      store: '/src/store',
      api: '/src/api',
      ui: '/src/UI',
      constants: '/src/constants',
    },
  },
});
