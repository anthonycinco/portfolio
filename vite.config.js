import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/portfolio/', // Removed for main branch deployment
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
