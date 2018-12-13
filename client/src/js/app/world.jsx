import React from 'react'

import WorldMap from './world-map.jsx'
import api from '../api'

export default class VisitedCountries extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visitedCountries: []
    }
  }

  componentWillMount () {
    api.listCountries()
      .then(countries => this.setState({visitedCountries: countries}))
  }

  render () {
    const count = this.state.visitedCountries.length

    return (
      <div>
        <header className='header'>
          <h1 className='header-title'><span className='header-title--small'>Mon carnet de</span>voyages</h1>
        </header>
        <main>
          <WorldMap visitedCountries={this.state.visitedCountries} history={this.props.history} />
          <section className='contents'>
            <h3 className='title'>Statistics</h3>
            <div className='stamp'>560 km</div>
            <div className='stamp stamp--2lines'>560 km this year</div>
            <div className='stamp'>{count}</div>
            <div className='tooltip  tooltip--top'>
              {count} Visited countries
            </div>
          </section>
        </main>
      </div>
    )
  }
}
