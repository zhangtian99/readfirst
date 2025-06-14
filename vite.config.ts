import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/readfirst/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
