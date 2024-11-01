// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Simplify import paths
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 3000, // Change the dev server port
    open: true, // Open the app in the browser on server start
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Proxy API requests
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'build', // Output directory for production build
    sourcemap: true, // Generate source maps
  },
});
