// Copyright (c) 2018. Dirk Holtwick <holtwick.de>

const isProduction = process.env.NODE_ENV === 'production'
const isElectron = process.env.VUE_APP_TARGET === 'electron'
const isPWA = isElectron || process.env.VUE_APP_TARGET === 'pwa'

let config = {
  productionSourceMap: false,
  configureWebpack: {
    // target: 'electron-renderer',

    // https://stackoverflow.com/a/35426611/140927
    externals: [
      (function () {
        var IGNORES = [
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
      themeColor: '#272727',
      msTileColor: '#272727',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // navigateFallback: '/pwa/index.html',
        swSrc: 'src/service-worker.js',
        importWorkboxFrom: 'local',
        exclude: [/\.htaccess/],
        // skipWaiting: true,
      },
    }
  }
}

if (isProduction) {
  config.publicPath = '/'

  if (isElectron) {
    // config.publicPath = '/'
  } else if (isPWA) {
    // config.publicPath = '/pwa'
  } else {
    config.publicPath = '/app'
  }

} else if (!isElectron) {

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

if (isElectron) {

  config.pluginOptions = {
    electronBuilder: {
      builderOptions: {
        appId: 'de.holtwick.electron.Briefings',
        productName: 'Briefings',
        copyright: '(C)opyright Dirk Holtwick, 2020 <https://holtwick.de>',
        directories: {
          buildResources: 'resources',
        },
        // fileAssociations: [{
        //   ext: ['briefing', 'briefings'],
        //   isPackage: false,
        // }],
        // protocols: [{
        //   name: 'briefing',
        //   schemes: ['briefing', 'briefings'],
        // }],
        win: {
          target: [{
            target: 'appx',
            // arch: [
            //   'ia32',
            //   'x64',
            // ],
          }],
        },
        nsis: {
          perMachine: true,
          artifactName: 'Briefings-win-${version}-${arch}.${ext}',
          deleteAppDataOnUninstall: true,
        },
        appx: {
          displayName: 'Briefings',
          applicationId: 'Briefings',
          identityName: '41510Holtwick.Brie.fing',
          publisher: 'CN=977BD49F-EBE0-4D24-80EB-AE5A2D4A07E8',
          publisherDisplayName: 'Holtwick',
          artifactName: 'Briefings-win-store-${version}-${arch}.${ext}',
          backgroundColor: '#272727',
        },
      },
    },
  }
}

console.info('config = ' + JSON.stringify(config, null, 2))

module.exports = config
