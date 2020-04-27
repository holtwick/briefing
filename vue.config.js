// Copyright (c) 2018. Dirk Holtwick <holtwick.de>

const isProduction = process.env.NODE_ENV === 'production'
const isPWA = process.env.VUE_APP_TARGET === 'pwa'

let config = {
  productionSourceMap: false,
}

if (isPWA) {
  config.pages = {
    index: {
      entry: 'src/pwa.js',
      template: 'public/index.html',
      filename: 'index.html',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }

  if (isProduction) {
    // Don't load workbox stuff from third party site
    config.pwa = {
      workboxOptions: {
        importWorkboxFrom: 'local',
        exclude: [/\.htaccess/],
        skipWaiting: true,
      },
    }
  }
}

if (isProduction) {

  config.publicPath = isPWA ? '/ngs' : '/app'

} else {

  config.devServer = {

    // Allow debugging from multiple devices in the local network
    disableHostCheck: true,

    // Some API (like WebRTC getUserMedia) is only allowed in secure context
    https: (process.env.HTTPS_OFF || '').toString() !== '1',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  }

}

console.info('config = ' + JSON.stringify(config, null, 2))

module.exports = config
