const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'js/app': './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../assets'),
    filename: '[name].js'
  }
}