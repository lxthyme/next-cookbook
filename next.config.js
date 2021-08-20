/* eslint-disable */
// module.exports = require('./next-config/css-in-js.config').withLess
// module.exports = require('./next-config/less.config')
/* eslint-disable */

const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// development or other environment
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

/****************************** Antd Less Config ******************************/
// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './public/ant/ant.custom.less'),
    'utf8',
  ),
)

// // fix antd bug in dev development
// const devAntd = '@import "~antd/dist/antd.less";\n';
// const stylesData = fs.readFileSync(
//   path.resolve(__dirname, './public/less/_styles.less'),
//   'utf-8'
// );
// fs.writeFileSync(
//   path.resolve(__dirname, './public/less/self-styles.less'),
//   isDev ? `${devAntd}${stylesData}` : stylesData,
//   'utf-8'
// );

// // fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = () => {}
// }

/**
 * 1. @zeit/next-less
 * 2. less
 * 3. less-vars-to-js
 */
const withLessConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    const rules = config.module.rules
    // console.log(`>>>[${rules.length}]: `, rules)
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
}

// const bundleAnalyzer = require('./next-config/bundle-analyzer')
// module.exports = bundleAnalyzer.defaultBundleAnalyzer

const withCss = require('@zeit/next-css')
const withCssConfig = {
  webpack: (config, { isServer, defaultLOaders }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })

      console.log('>>>defaultLOaders: ', defaultLOaders);
      // config.module.rules.push({
      //   test: /\\.js$/,
      //   include: /node_modules\/echarts\/components/,
      //   use: [
      //     defaultLOaders.babel,
      //     { loader: 'es-loader', options: {}}
      //   ]
      // })
    }
    return config
  },
}

const withPlugins = require('next-compose-plugins')
// module.exports = withPlugins(
//   [
//     [withLess, withLessConfig],
//     // [withCss, withCssConfig],
//     [withCss, {}],
//   ],
//   {}
// )
// const withTM = require('next-transpile-modules')([
//   // Add the name of your package here...
//   'echarts/components',
// ])

// module.exports = withPlugins(
//   [withTM, [withLess, withLessConfig], [withCss, {}], []],
//   {
//     // ...
//   },
// )

// const withLessExcludeAntd = require("./next-config/less2.config")
// // choose your own modifyVars
// const modifyVars = require("./public/ant/ant.custom.less")

// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = (file) => {}
// }

// module.exports = withLessExcludeAntd({
//     cssModules: true,
//     cssLoaderOptions: {
//       importLoaders: 1,
//       localIdentName: "[local]___[hash:base64:5]",
//     },
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//       modifyVars: modifyVars
//     }
// })

// const antdLessLoader = require('next-antd-aza-less')
// const modifyVars = require('./public/ant/ant.custom.less')

// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = (file) => {}
// }

// /* Without CSS Modules, with PostCSS */
// module.exports = antdLessLoader({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[hash:base64:5]',
//   },
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//     modifyVars: modifyVars,
//   },
// })
