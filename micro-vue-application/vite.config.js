import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import qiankun from "vite-plugin-qiankun";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    qiankun('vueApp', {
      // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    host: "0.0.0.0",
    port: 8080,
    strictPort: true, // 端口被占用时报错，不自动切换
  },
})

