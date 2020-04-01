console.log({
  SECRET: process.env.SECRET,
  ANOTHER_SECRET: process.env.ANOTHER_SECRET
})

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const isProd = process.env.NODE_ENV === 'production'

// const cssInJS = require('./next-config/css-in-js.config')
// module.exports = cssInJS.withSass
// module.exports = cssInJS.withCSS

// const bundleAnalyzer = require('./next-config/bundle-analyzer')
// module.exports = bundleAnalyzer.defaultBundleAnalyzer

// const env = require('./next-config/env.config')
// module.exports = env.ENV

// const cdn = require('./next-config/cdn.config')
// module.exports = cdn.CDN

module.exports = (phase, { defaultConfig }) => {
  //   console.log("-->phase: ", phase);
  //   console.log("-->defaultConfig: ", defaultConfig);
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }
  return {
    /* config options for all phases except development here */
    // target: "serverless",
    // target: "server",
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
    poweredByHeader: false,
    // pageExtensions: ['mdx', 'jsx', 'js'],
    env: {
      SECRET: process.env.SECRET,
      customKey: 'my-value'
    },
    devIndicators: {
      autoPrerender: false
    }
  }
}

// module.exports = {
//   generateBuildId: async () => {
//     // You can, for example, get the latest git commit hash here
//     return "my-build-id";
//   }
// };

/// Webpack config
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    // Fixes npm packages that depend on `fs` module
    // config.node = {
    //   fs: 'empty'
    // }
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
}

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    console.log('defaultPathMap: ', defaultPathMap)
    return {
      '/a': { page: '/nextjs-doc/9.api-reference/3.next-link' },
      '/b': { page: '/nextjs/about' }
    }
  }
}

// module.exports = {
//   publicRuntimeConfig: {
//     API_TEST: process.env.API_URL,
//     API_BETA: 'https://apibeta.vaffle.com'
//   }
// }

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
