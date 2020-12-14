// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const handle = app.getRequestHandler()
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    // const { pathname, query = {} } = parsedUrl

    if (req.headers.host === 'my-app.com') {
      app.setAssetPrefix('https://cdn.com/myapp')
    } else {
      app.setAssetPrefix('')
    }

    if (pathname === "/a") {
      app.render(req, res, "/b", query);
    } else if (pathname === "/b") {
      app.render(req, res, "/a", query);
    } else {
      handle(req, res, parsedUrl);
    }

    handle(req, res, parsedUrl)
  }).listen(port, err => {
    if (err) throw err
    console.log(`>>> Ready on http://localhost:${port}`)
  })
})

const logReq = req => {
  console.group('--- REQ ---')
  Object.keys(req).forEach(t => {
    ![
      '_readableState',
      '_maxListeners',
      '_events',
      '_eventsCount',
      '_dumped',
      '_consuming',
      'socket',
      'connection',
      'client',
      'httpVersionMajor',
      'httpVersionMinor',
      'httpVersion',
      'rawHeaders',
      'rawTrailers'
    ].includes(t) && console.log(`>>>[${t}]: `, req[t])
  })
  console.log('--- REQ END ---')
  console.groupEnd('--- REQ ---')
}

const logRes = res => {
  console.group('--- RES ---')
  Object.keys(res).forEach(t => {
    ![
      '_events',
      '_maxListeners',
      '_removedConnection',
      '_removedContLen',
      '_removedTE',
      '_contentLength',
      'socket',
      'connection'
    ].includes(t) && console.log(`>>>[${t}]: `, res[t])
  })
  console.log('--- RES END ---')
  console.groupEnd('--- RES ---')
}
