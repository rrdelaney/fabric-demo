const { configureLoadStyles } = require('@microsoft/load-themed-styles')

let _allStyles = ''
configureLoadStyles(styles => {
  _allStyles += styles
})

const express = require('express')
const React = require('react')
const ReactDomServer = require('react-dom/server')
const { renderStatic } = require('glamor/server')
const App = require('./app')

express()
  .use(express.static('dist'))
  .get('*', (req, res) => {
    process['__currentId__'] = 0

    const { html, css, ids } = renderStatic(() =>
      ReactDomServer.renderToString(App)
    )

    res.status(200).send(`<!doctype html>
      <head>
        <style>${_allStyles}</style>
        <style>${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>window._glam = ${JSON.stringify(ids)}</script>
        <script src="/index.js"></script>
      </body>
    </html>`)
  })
  .listen(3000)
