import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  }
});

const viteConfig = defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  server: { open: true },
  preview: { port: 5173 }
});

export default mergeConfig(viteConfig, vitestConfig);
