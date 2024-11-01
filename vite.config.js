// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // React Fast Refresh is enabled by default
      // Additional React-specific configurations can go here
    }),
    svgr({
      // Configuration for handling SVGs as React components
      svgrOptions: {
        icon: true, // Enables SVG icons
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),              // Alias '@' to './src' directory
      '@components': path.resolve(__dirname, './src/components'), // Alias '@components' to './src/components'
      '@assets': path.resolve(__dirname, './src/assets'),  // Alias '@assets' to './src/assets'
    },
  },
  server: {
    port: 3000,            // Development server port
    open: true,            // Automatically open the app in the browser on server start
    // proxy: {             // Uncomment and configure if you need to proxy API requests
    //   '/api': {
    //     target: 'http://localhost:5000',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  build: {
    outDir: 'build',      // Output directory for the production build
    sourcemap: true,      // Generates source maps for the production build
    minify: 'esbuild',    // Minification using esbuild (default is 'esbuild')
    target: 'es2015',     // Specify the target for the final build
  },
});
