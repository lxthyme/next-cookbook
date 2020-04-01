const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

console.log({
  SECRET: process.env.SECRET,
  ANOTHER_SECRET: process.env.ANOTHER_SECRET
});

const isProd = process.env.NODE_ENV === "production";

module.exports = (phase, { defaultConfig }) => {
  //   console.log("-->phase: ", phase);
  //   console.log("-->defaultConfig: ", defaultConfig);
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    };
  }
  return {
    /* config options for all phases except development here */
    // target: "serverless",
    // target: "server",
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
    poweredByHeader: false,
    env: {
      SECRET: process.env.SECRET,
      customKey: "my-value"
    },
    devIndicators: {
      autoPrerender: false
    }
  };
};

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
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  }
};

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    console.log("defaultPathMap: ", defaultPathMap);
    return {
      "/a": { page: "/nextjs-doc/9.api-reference/3.next-link" },
      "/b": { page: "/nextjs/about" }
    };
  }
};
