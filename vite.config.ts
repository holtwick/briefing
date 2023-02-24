import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { valueToBoolean } from 'zeed'

const env = process.env

env.BRIEFING_NAME ??= env.npm_package_name
env.BRIEFING_VERSION ??= env.npm_package_version
env.BRIEFING_RELEASE ??= `${env.npm_package_name}@${env.npm_package_version}`
env.BRIEFING_AUTHOR_NAME ??= env.npm_package_author_name
env.BRIEFING_AUTHOR_EMAIL ??= env.npm_package_author_email

const define = {
  DEBUG: valueToBoolean(process.env.DEBUG, false),
  PRO: valueToBoolean(process.env.PRO, false),
  // TEST: valueToBoolean(process.env.TEST, false),
  // SERVICE: valueToBoolean(process.env.SERVICE, false),
}

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ['BRIEFING_', 'APP_', 'VITE_'],
  plugins: [vue()],
  define,
  build: {
    outDir: 'www',
    sourcemap: true,
    minify: true,
    target: 'es6',
  },
})
