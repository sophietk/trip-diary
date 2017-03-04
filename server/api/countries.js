const validate = require('express-validation')
const Joi = require('joi')
const refCountries = require('country-data').countries

module.exports = app => {
  app.get('/api/countries',
    (req, res) => {
      res.send(app.currentUser.countries || [])
    })

  app.post('/api/countries',
    validate({
      body: {
        alpha3: Joi.string().regex(/^[A-Z]{3}$/).required()
      }
    }),
    (req, res) => {
      const country = refCountries[req.body.alpha3]

      if (!country) {
        res.sendStatus(400)
        return
      }

      app.currentUser.countries.push(country)
      res.send(country).status(201)
    })

  app.get('/api/countries/:countryId',
    (req, res) => {
      const countryId = req.params.countryId
      const visitedCountry = app.currentUser.countries.find(country => country.alpha3 === countryId)

      if (!visitedCountry) {
        const unvisitedCountry = refCountries[countryId]

        if (!unvisitedCountry) {
          res.sendStatus(400)
        }

        res.send(unvisitedCountry)
        return
      }

      res.send(visitedCountry)
    })
}
