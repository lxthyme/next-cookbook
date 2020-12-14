const isProd = process.env.NODE_ENV === 'production'

exports.CDN = {
  // You may only need to add assetPrefix in the production.
  assetPrefix: isProd ? 'https://cdn.com' : ''
}
