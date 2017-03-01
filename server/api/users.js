const crypto = require('crypto')

// in memory database for now
const users = []

module.exports = app => {
  app.post('/signup', (req, res) => {
    const hash = crypto.createHash('sha256')
    hash.update(req.body.password)

    const user = {
      email: req.email,
      password: hash.digest('hex')
    }

    users.push(user)
    res(user)
  })
}
