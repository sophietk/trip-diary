import React from 'react'
import { Link } from 'react-router'
import numeral from 'numeral'

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

  contents () {
    return (
      <div>
        <div className='btn btn--add' onClick={() => this.visitCountry()} />
        <div className='badge badge--capital'>
          {this.state.capital}
        </div>
        <div className='badge badge--population'>
          {numeral(this.state.population).format('0.0a')}
        </div>
        <div className='badge badge--area'>
          {numeral(this.state.area).format('0.0a')}
        </div>
      </div>
    )
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
          <CountryMap country={this.state} contents={this.contents()} />
        </main>
      </div>
    )
  }
}
