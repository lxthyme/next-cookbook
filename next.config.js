const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    };
  }

  return {
    /* config options for all phases except development here */
    pageExtensions: ["mdx", "jsx", "js"]
  };
};

// const withTypescript = require('@zeit/next-typescript')
// module.exports = withTypescript({
//   webpack(config, options) {
//     console.log('config: ', config)
//     console.log('options: ', options)
//     return config
//   },
// })

// module.exports = (phase, ctx) => {
//     console.log('phase: ', phase)
//     console.log('ctx: ', ctx)
//     return {
//         poweredByHeader: false,
//     }
// }

// const withSass = require("@zeit/next-sass");
// const withImages = require("next-images");
// module.exports = withImages(
//   withSass({
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
//         use: {
//           loader: "url-loader",
//           options: {
//             limit: 100000,
//             publicPath: "./",
//             outputPath: "static/",
//             name: "[name].[ext]"
//           }
//         }
//       });

//       return config;
//     }
//   })
// );

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
