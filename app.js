const React = require('react')
const { createElement: h } = React
const Fabric = require('office-ui-fabric-react')

const Button = () => h(Fabric.Fabric, {}, h(Fabric.DefaultButton, {}, 'Hello!'))

const App = h(Button)

module.exports = App
