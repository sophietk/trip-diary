const crypto = require('crypto')
const validate = require('express-validation')
const Joi = require('joi')

// in memory database for now
const users = []

module.exports = app => {
  app.post('/api/signup',
    validate({
      body: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required()
      }
    }),
    (req, res) => {
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

  app.post('/api/signin',
    validate({
      body: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
      }
    }),
    (req, res) => {
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
