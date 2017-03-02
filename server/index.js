const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// health check
app.get('/ping', function (req, res) {
  res.send('pong')
})

// static files
app.use(express.static('client/dist'))

require('./api/users')(app)

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
