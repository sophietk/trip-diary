const crypto = require('crypto')

// in memory database for now
const users = []

module.exports = app => {
  app.post('/api/signup', (req, res) => {
    const hash = crypto.createHash('sha256')
      .update(req.body.password)
      .digest('hex')

    const user = {
      name: req.body.name,
      email: req.body.email,
      hash: hash
    }

    users.push(user)
    res.send(user)
  })

  app.post('/api/signin', (req, res) => {
    const email = req.body.email
    const hash = crypto.createHash('sha256')
      .update(req.body.password)
      .digest('hex')

    const signinUser = users.find(user => user.email === email && user.hash === hash)

    if (!signinUser) {
      res.sendStatus(404)
      return
    }

    res.send(signinUser)
  })
}
