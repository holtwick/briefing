import vue from "@vitejs/plugin-vue2"
import { defineConfig } from "vite"

let env = process.env

env.VUE_APP_NAME = env.npm_package_name
env.VUE_APP_VERSION = env.npm_package_version
env.VUE_APP_RELEASE = `${env.npm_package_name}@${env.npm_package_version}`
env.VUE_APP_AUTHOR_NAME = env.npm_package_author_name
env.VUE_APP_AUTHOR_EMAIL = env.npm_package_author_email

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ["APP_", "VITE_", "VUE_"],
  plugins: [vue()],
  build: {
    outDir: "www",
    sourcemap: true,
    minify: true,
    target: "es6",
  },
})
