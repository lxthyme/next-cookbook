/* eslint-disable */
// module.exports = require('./next-config/css-in-js.config').withLess
// module.exports = require('./next-config/less.config')

// development or other environment
// const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

// const bundleAnalyzer = require('./next-config/bundle-analyzer')
// module.exports = bundleAnalyzer.defaultBundleAnalyzer

const antdLessConfig = require('./next-config/antd.less.config')
module.exports = antdLessConfig

const withCSS = require('@zeit/next-css')

const withPlugins = require('next-compose-plugins')
module.exports = withPlugins(
  [
    [antdLessConfig, {}],
    // [withCss, withCssConfig],
    [withCSS, {}],
  ],
  {}
)
