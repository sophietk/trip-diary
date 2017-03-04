import React from 'react'
import { Link } from 'react-router'

import CountryMap from './country-map.jsx'
import api from '../api'

export default class Country extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {
    this.fetchCountry()
  }

  fetchCountry () {
    api.getCountry(this.props.params.countryId)
      .then(country => this.setState(country))
  }

  visitCountry () {
    api.addCountry(this.props.params.countryId)
    .then(() => this.fetchCountry)
  }

  render () {
    if (!this.state.name) {
      return null
    }

    return (
      <div>
        <header className='header'>
          <h1 className='header-title'>{this.state.name}</h1>
          <Link to='/app/world' className='header-back' />
        </header>
        <main>
          <CountryMap country={this.state} />
          <section className='contents'>
            <div className='btn btn--add' onClick={() => this.visitCountry()}>
              +
            </div>
            <p>
              Capital: {this.state.capital}
            </p>
            <p>
              Population: {this.state.population}
            </p>
            <p>
              Area: {this.state.area} km²
            </p>
          </section>
        </main>
      </div>
    )
  }
}
