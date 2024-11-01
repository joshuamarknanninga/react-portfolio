// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Enables React-specific features like JSX transformation
    svgr({
      // Configuration options for vite-plugin-svgr
      svgrOptions: {
        icon: true, // Optional: Optimize SVGs as icon components
        // You can add more svgr options here if needed
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Allows using '@' to reference the 'src' directory
      // Add more aliases if necessary
    },
  },
  server: {
    port: 3000, // Specify the port you want the dev server to run on
    open: true, // Automatically open the app in the browser on server start
    // You can add more server options here
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
    // You can add more build options here
  },
});
