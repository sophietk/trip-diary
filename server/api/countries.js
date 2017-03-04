const validate = require('express-validation')
const Joi = require('joi')
const refLocalCountries = require('country-data').countries
const Client = require('node-rest-client').Client

module.exports = app => {
  app.get('/api/countries',
    (req, res) => {
      res.send(app.currentUser.countries)
    })

  app.post('/api/countries',
    validate({
      body: {
        alpha3: Joi.string().regex(/^[A-Z]{3}$/).required()
      }
    }),
    (req, res) => {
      const country = refLocalCountries[req.body.alpha3]

      if (!country) {
        res.sendStatus(400)
        return
      }

      app.currentUser.countries.push({alpha3: req.body.alpha3, visited: true})
      res.send(country).status(201)
    })

  app.get('/api/countries/:countryId',
    (req, res) => {
      const countryId = req.params.countryId
      const refLocalCountry = refLocalCountries[countryId]
      const visitedCountry = app.currentUser.countries.find(country => country.alpha3 === countryId)

      if (!refLocalCountry) {
        res.sendStatus(400)
        return
      }

      new Client().get(`https://restcountries.eu/rest/v2/alpha/${countryId}`, (refRemoteCountry, response) => {
        res.send(Object.assign({}, refRemoteCountry, refLocalCountry, visitedCountry))
      })
    })
}
