// Copyright (c) 2018. Dirk Holtwick <holtwick.de>

const isProduction = process.env.NODE_ENV === 'production'

let config = {
  publicPath: '/',
  productionSourceMap: false,
  configureWebpack: {

    // https://stackoverflow.com/a/35426611/140927
    externals: [
      (function () {
        const IGNORES = [
          'electron',
        ]
        return function (context, request, callback) {
          if (IGNORES.indexOf(request) >= 0) {
            return callback(null, 'require(\'' + request + '\')')
          }
          return callback()
        }
      })(),
    ],
  },

  pages: {
    index: {
      entry: 'src/pwa.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },

  pwa: {
    themeColor: '#272727',
    msTileColor: '#272727',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      importWorkboxFrom: 'local',
      exclude: [/\.htaccess/],
    },
    iconPaths: {
      favicon32: 'favicon-32x32.png',
      favicon16: 'favicon-16x16.png',
      appleTouchIcon: 'apple-touch-icon.png',
      maskIcon: null, // 'safari-pinned-tab.svg',
      msTileImage: 'mstile-150x150.png',
    },
  },

  devServer: {

    // Some API (like WebRTC getUserMedia) is only allowed in secure context
    https: (process.env.HTTPS_OFF || '').toString() !== '1',

    cert: process.env.SSL_CERT_PATH,
    key: process.env.SSL_KEY_PATH,

    // Allow debugging from multiple devices in the local network
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  },
}


if (!isProduction && config.devServer.https && (!process.env.SSL_KEY_PATH || !process.env.SSL_CERT_PATH)) {
  console.error('Please provide SSL_KEY_PATH and SSL_CERT_PATH.')
  console.error('See https://blog.filippo.io/mkcert-valid-https-certificates-for-localhost/ for how to create SSL certificates for localhost')
  process.exit(0)
}

// console.info('config = ' + JSON.stringify(config, null, 2))

module.exports = config
