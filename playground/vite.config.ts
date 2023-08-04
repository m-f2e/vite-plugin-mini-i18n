import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePluginMiniI18n } from '../src/index.ts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    VitePluginMiniI18n(),
  ],
})
