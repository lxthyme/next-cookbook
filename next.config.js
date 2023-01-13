/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  // console.log('-->config: ', config)
  // console.log(`-->defaultConfig[${phase}]: `, defaultConfig)
  return {
    reactStrictMode: true,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    // css: {
    //   autoprefixer: true,
    //   purge: true,
    // },
    // experimental: {
    //   forceSwcTransforms: true,
    // },
    async rewrites() {
      return [
        {
          source: '/api/echarts',
          destination: 'https://cdn.jsdelivr.net',
        },
      ]
    },
    async headers() {
      return [
        {
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    }
  }
}

// "postcss": {
//   "plugins": {
//     "lost": {},
//     "postcss-nested": {}
//   }
// },
// "browserslist": [
//   "chrome 64",
//   "edge 79",
//   "firefox 67",
//   "opera 51",
//   "safari 12"
// ],
