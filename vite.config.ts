import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  root: 'views',
  base: '/views/',

  plugins: [
    tailwindcss(),
  ],

  server: {
    proxy: {
      'api': {
        target: 'http:localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    },
  },
})
