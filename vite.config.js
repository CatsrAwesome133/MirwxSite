import { defineConfig } from 'vite';

export default defineConfig({
  // 💡 Add this block to force Vite to pre-bundle anime.js correctly
  optimizeDeps: {
    include: ['animejs'],
  },
});