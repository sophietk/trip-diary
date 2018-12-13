const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'client/dist')
const APP_DIR = path.resolve(__dirname, 'client/src')

const config = {
  entry: [
    // polyfills
    'whatwg-fetch',
    // app
    APP_DIR + '/js/app.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
