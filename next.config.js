const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// const isProd = process.env.NODE_ENV === 'production'

const cssInJS = require('./next-config/css-in-js.config')
module.exports = cssInJS.withSass
module.exports = cssInJS.withCSS

const bundleAnalyzer = require('./next-config/bundle-analyzer')
module.exports = bundleAnalyzer.defaultBundleAnalyzer

const env = require('./next-config/env.config')
module.exports = env.ENV

const cdn = require('./next-config/cdn.config')
module.exports = cdn.CDN

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  }
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }

  return {
    /* config options for all phases except development here */
    pageExtensions: ['mdx', 'jsx', 'js']
  }
}

module.exports = (phase, ctx) => {
  // console.log('phase: ', phase)
  // console.log('ctx: ', ctx)
  return {
    poweredByHeader: false
  }
}

/**
const ctx = {
    defaultConfig: {
        env: [],
        webpack: null,
        webpackDevMiddleware: null,
        distDir: '.next',
        assetPrefix: '',
        configOrigin: 'default',
        useFileSystemPublicRoutes: true,
        generateBuildId: [Function: generateBuildId],
        generateEtags: true,
        pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
        target: 'server',
        poweredByHeader: true,
        compress: true,
        devIndicators: {
            buildActivity: true,
            autoPrerender: true
        },
        onDemandEntries: {
            maxInactiveAge: 60000,
            pagesBufferLength: 2
        },
        amp: {
            canonicalBase: ''
        },
        exportTrailingSlash: false,
        experimental: {
            ampBindInitData: false,
            cpus: 3,
            css: false,
            documentMiddleware: false,
            granularChunks: false,
            modern: false,
            profiling: false,
            publicDirectory: false,
            sprFlushToDisk: true
        },
        future: {
            excludeDefaultMomentLocales: false
        },
        serverRuntimeConfig: {},
        publicRuntimeConfig: {}
    }
}
 */

// module.exports = {
//   publicRuntimeConfig: {
//     API_TEST: process.env.API_URL,
//     API_BETA: 'https://apibeta.vaffle.com'
//   }
// }
