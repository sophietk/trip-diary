const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'client/dist')
const APP_DIR = path.resolve(__dirname, 'client/src')

const config = {
  entry: [
    // polyfills
    'whatwg-fetch',
    // app
    APP_DIR + '/js/main.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
}

module.exports = config
