/**
 * @zeit/next-less less
 * less
 */
const withLess = require('@zeit/next-less')
module.exports = withLess({
  /* config options here */
  // 在项目中使用cssModule
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
})

/**
 * @zeit/next-sass
 * node-sass
 */
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
// exports.withSass = require('@zeit/next-sass')({
//   cssModules: true,
//   webpack: function (config) {
//     return config
//   }
// })

/** @zeit/next-css */
// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
// exports.withCSS = require('@zeit/next-css')({
//   // cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[hash:base64:5]'
//   },
//   webpack: function (config) {
//     return config
//   }
// })

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
