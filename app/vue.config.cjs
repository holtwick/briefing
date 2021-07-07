// Copyright (c) 2018. Dirk Holtwick <holtwick.de>

let env = process.env

const isProduction = env.NODE_ENV === "production"

env.VUE_APP_NAME = env.npm_package_name
env.VUE_APP_VERSION = env.npm_package_version
env.VUE_APP_RELEASE = `${env.npm_package_name}@${env.npm_package_version}`
env.VUE_APP_AUTHOR_NAME = env.npm_package_author_name
env.VUE_APP_AUTHOR_EMAIL = env.npm_package_author_email

let config = {
  publicPath: "/",

  productionSourceMap: true,
  css: {
    sourceMap: true,
  },

  configureWebpack: {
    // https://stackoverflow.com/a/35426611/140927
    externals: [
      (function () {
        const IGNORES = ["electron"]
        return function (context, request, callback) {
          if (IGNORES.indexOf(request) >= 0) {
            return callback(null, "require('" + request + "')")
          }
          return callback()
        }
      })(),
    ],
  },

  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },

  pwa: {
    themeColor: "#272727",
    msTileColor: "#272727",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      importWorkboxFrom: "local",
      exclude: [/\.htaccess/, /.*\.css\.map/],
      // navigateFallback: '/pwa/index.html',
      // importScripts: ['./src/service-worker-custom.js'],
      // skipWaiting: true,
      // clientsClaim: true,
    },
    iconPaths: {
      favicon32: "favicon-32x32.png",
      favicon16: "favicon-16x16.png",
      appleTouchIcon: "apple-touch-icon.png",
      maskIcon: null, // 'safari-pinned-tab.svg',
      msTileImage: "mstile-150x150.png",
    },
  },

  devServer: {
    // Some API (like WebRTC getUserMedia) is only allowed in secure context or localhost
    https: env.HTTPS === "1",

    cert: env.SSL_CERT_PATH,
    key: env.SSL_KEY_PATH,

    // Allow debugging from multiple devices in the local network
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  },
}

if (
  !isProduction &&
  config.devServer.https &&
  (!process.env.SSL_KEY_PATH || !process.env.SSL_CERT_PATH)
) {
  console.error("Please provide SSL_KEY_PATH and SSL_CERT_PATH.")
  console.error(
    "See https://blog.filippo.io/mkcert-valid-https-certificates-for-localhost/ for how to create SSL certificates for localhost"
  )
  process.exit(0)
}

// console.info('config = ' + JSON.stringify(config, null, 2))

module.exports = config
