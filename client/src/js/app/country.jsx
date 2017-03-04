import React from 'react'

import CountryMap from './country-map.jsx'
import api from '../api'

export default class Country extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    api.getCountry(this.props.params.countryId)
      .then(country => this.setState(country))
  }
  /*
    visitCountry () {
      api.addCountry(geography.id)
    }
  */
  render () {
    if (!this.state) {
      return null
    }

    return (
      <div>
        <header className='header'>
          <h1 className='header-title'>{this.state.name}</h1>
        </header>
        <main>
          <CountryMap countryId={this.props.params.countryId} />
          <section className='contents'>
            <p>
              Capital:
              {this.state.capital}
            </p>
            <p>
              Population:
              {this.state.population}
            </p>
            <p>
              Area:
              {this.state.area} km²
            </p>
          </section>
        </main>
      </div>
    )
  }
}
