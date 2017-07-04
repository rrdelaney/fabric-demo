const React = require('react')
const ReactDom = require('react-dom')
const { rehydrate } = require('glamor')
const App = require('./app')

rehydrate(window._glam)
const root = document.getElementById('root')
ReactDom.render(App, root)
