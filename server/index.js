const express = require('express')

const app = express()

// health check
app.get('/ping', function (req, res) {
  res.send('pong')
})

// static files
app.use(express.static('client'))

require('./api/users')(app)

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
