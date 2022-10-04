import vue from '@vitejs/plugin-vue2'
import { defineConfig } from 'vite'

const env = process.env

env.BRIEFING_NAME = env.npm_package_name
env.BRIEFING_VERSION = env.npm_package_version
env.BRIEFING_RELEASE = `${env.npm_package_name}@${env.npm_package_version}`
env.BRIEFING_AUTHOR_NAME = env.npm_package_author_name
env.BRIEFING_AUTHOR_EMAIL = env.npm_package_author_email

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ['BRIEFING_'],
  plugins: [vue()],
  build: {
    outDir: 'www',
    sourcemap: true,
    minify: true,
    target: 'es6',
  },
})
