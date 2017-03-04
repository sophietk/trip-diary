const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const BUILD_DIR = path.resolve(__dirname, '..', 'client/dist')
const APP_ROUTES = [
  '/start',
  '/app'
]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// health check
app.get('/ping', function (req, res) {
  res.send('pong')
})

// static files
app.use(express.static('client/dist'))
// always return the main index.html, so react-router render the route in the client
app.get('*', (req, res, next) => {
  if (!APP_ROUTES.find(route => req.url.startsWith(route))) {
    next()
    return
  }
  res.sendFile(`${BUILD_DIR}/index.html`)
})

require('./api/users')(app)

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
