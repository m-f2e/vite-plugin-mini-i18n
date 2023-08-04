import { defineConfig } from 'tsup'

export default defineConfig({
  external: [
    'vite',
    'vue'
  ],
  entry: [
    'src/index.ts',
  ],
  dts: true,
  clean: true,
  format: ['cjs', 'esm'],
})
