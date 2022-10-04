/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    // setupFiles: ["vitest-setup.ts"],
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    snapshotFormat: {
      printBasicPrototype: true,
    },
    root: './src',
    globals: true,
    alias: {
      '@/': `${resolve(process.cwd(), 'src')}/`,
    },
  },
})
