const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    'js/app': './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: 'build',
    open: true,
    proxy: {
      '/api': {
        target: 'https://other-server.example.com',
        secure: false
      }
    }
  },
  plugins: [new HtmlWebpackPlugin({
    template: './assets/html/index.html'
  })]
}
