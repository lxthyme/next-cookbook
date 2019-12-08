const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

/**
 * cross-env
 * @next/bundle-analyzer
 * webpack-bundle-analyzer
 */
const nextConfig = {
  enabled: process.env.ANALYZE === 'true',
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  webpack (config) {
    return config
  }
}
exports.withBundleAnalyzer = withBundleAnalyzer(nextConfig)
