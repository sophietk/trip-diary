import React from 'react'
import Datamap from 'datamaps'

import api from '../api'

const WORLD_MAP_RATIO = 475 / 700

export default class Map extends React.Component {
  componentDidMount () {
    this.map = new Datamap({
      element: document.getElementById('map'),
      projection: 'mercator',
      fills: {
        defaultFill: '#e7dbcb', // cf. _colors.scss $color-brown-light
        visited: '#2dced1' // cf. _colors.scss $color-blue
      },
      geographyConfig: {
        highlightFillColor: '#f8f7f4', // cf. _colors.scss $color-beige-light
        highlightBorderColor: '#2dced1', // cf. _colors.scss $color-brown
        highlightBorderWidth: 2,
        highlightBorderOpacity: 0.5
      },
      done: datamap => {
        datamap.svg.selectAll('.datamaps-subunit').on('click', geography => {
          api.addCountry(geography.id)
            .then(() => api.listCountries())
            .then(countries => this.updateMap(countries))
        })
      }
    })
    api.listCountries()
      .then(countries => this.updateMap(countries))
  }

  updateMap (visitedCountries) {
    const mapData = visitedCountries.reduce((data, country) => {
      data[country.alpha3] = { fillKey: 'visited' }
      return data
    }, {})
    this.map.updateChoropleth(mapData)
  }

  render () {
    const fullWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width

    return (
      <section id='map' className='map' style={{minHeight: (fullWidth * WORLD_MAP_RATIO) + 'px'}} />
    )
  }
}
