const { createServer } = require('http')
const { parse } = require('url')
const { join } = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Root files.
const rootStaticFiles = ['/favicon.ico', '/assets']

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    if (
      rootStaticFiles.filter(file => pathname.indexOf(file) > -1).length > 0
    ) {
      // Code path for static assets.
      const path = join(__dirname, 'static', pathname)
      app.serveStatic(req, res, path)
    } else {
      // Default code path
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
