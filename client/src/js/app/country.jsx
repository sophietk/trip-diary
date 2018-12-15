import React from 'react'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import CountryMap from './country-map.jsx'
import api from '../api'

export default class Country extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      alpha3: props.match.params.countryId
    }
  }

  componentWillMount () {
    this.fetchCountry()
  }

  fetchCountry () {
    api.getCountry(this.props.match.params.countryId)
      .then(country => this.setState(country))
  }

  visitCountry () {
    api.addCountry(this.props.match.params.countryId)
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
          {(this.state.population && numeral(this.state.population).format('0.0a')) || '\u00A0'}
        </div>
        <div className='badge badge--area'>
          {(this.state.area && numeral(this.state.area).format('0.0a')) || '\u00A0'}
        </div>
      </div>
    )
  }

  render () {
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
