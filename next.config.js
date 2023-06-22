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
    experimental: {
      // forceSwcTransforms: true,
      appDir: true,
      // future: {
      //   webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
      //   // Looks like backward compatibility approach.
      // },
      webpack5: true,
    },
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
    },
    webpack: (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };

      return config;
    },
    // webpack: (config, { isServer }) => {
    //   // Fixes npm packages that depend on `fs` module
    //   if (!isServer) {
    //     // config.node = {
    //     //   fs: 'empty'
    //     // }
    //     // config.resolve.fallback = {
    //     //   fs: false,
    //     //   net: false,
    //     //   dns: false,
    //     //   child_process: false,
    //     //   tls: false,
    //     // };
    //   }
    //   config.resolve.fallback = {
    //     ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
    //       // by next.js will be dropped. Doesn't make much sense, but how it is
    //     fs: false, // the solution
    //     path: false
    //   };
    //   console.log(`config.resolve.fallback${isServer}: `, config.resolve.fallback)
    //   return config
    // }
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
