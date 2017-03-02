const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const BUILD_DIR = path.resolve(__dirname, '..', 'client/dist')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// health check
app.get('/ping', function (req, res) {
  res.send('pong')
})

// static files
app.use(express.static('client/dist'))
// always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(`${BUILD_DIR}/index.html`)
})

require('./api/users')(app)

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
