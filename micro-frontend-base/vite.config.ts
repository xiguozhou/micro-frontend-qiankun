import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  // base: 'auto',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    host: true,
  },
  build: {
    target: 'es2018',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
})


