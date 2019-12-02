const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('route', '/blog/:slug')
routes.add('about', '/about/:slug(bar|baz)')
