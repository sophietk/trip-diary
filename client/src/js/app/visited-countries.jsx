import React from 'react'

export default class VisitedCountries extends React.Component {
  render () {
    return (
      <main>
        <section className='map'></section>
        <section className='contents'>
          <h3 className='title'>Statistics</h3>
          <div className='tooltip  tooltip--top'>
            3 Visited countries
          </div>
        </section>
      </main>
    )
  }
}
