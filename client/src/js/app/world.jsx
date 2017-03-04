import React from 'react'

import WorldMap from './world-map.jsx'

export default class VisitedCountries extends React.Component {
  render () {
    return (
      <div>
        <header className='header'>
          <h1 className='header-title'><span className='header-title--small'>Mon carnet de</span>voyages</h1>
        </header>
        <main>
          <WorldMap />
          <section className='contents'>
            <h3 className='title'>Statistics</h3>
            <div className='stamp'>
              560 km
            </div>
            <div className='stamp stamp--2lines'>
              560 km this year
            </div>
            <div className='stamp'>
              3
            </div>
            <div className='tooltip  tooltip--top'>
              3 Visited countries
            </div>
          </section>
        </main>
      </div>
    )
  }
}
