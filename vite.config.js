import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import reactDom from 'react-dom';

export default {
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons/fa'],
  },
},
};
