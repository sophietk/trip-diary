import React from 'react'

import Map from './map.jsx'

const visitedCountries = [
  {code: 'USA'},
  {code: 'JPN'},
  {code: 'ITA'},
  {code: 'CRI'},
  {code: 'KOR'},
  {code: 'DEU'}
]

export default class VisitedCountries extends React.Component {
  render () {
    return (
      <main>
        <Map visitedCountries={visitedCountries} />
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
    )
  }
}
