/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite'

process.env.ZEED = '*'
process.env.LEVEL = 'a'

export default defineConfig({
  test: {
    setupFiles: ['vitest-setup.ts'],
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: [
      'node_modules',
      'dist',
      'www',
      'legacy',
      'wiki',
      '.idea',
      '.git',
      '.cache',
      '_archive/*',
      '**/_archive/*',
    ],
    snapshotFormat: {
      printBasicPrototype: true,
    },
    globals: true,
    alias: {
      '@/': `${resolve(process.cwd(), 'src')}/`,
    },
  },
})
