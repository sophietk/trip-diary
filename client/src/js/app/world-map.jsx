import React from 'react'
import { browserHistory } from 'react-router'
import Datamap from 'datamaps'

const WORLD_MAP_RATIO = 475 / 700

export default class WorldMap extends React.Component {
  componentDidMount () {
    this.initMap()
    this.updateVisitedCountries()
  }

  initMap () {
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
          browserHistory.push(`/app/country/${geography.id}`)
        })
      }
    })
  }

  updateVisitedCountries () {
    const mapData = this.props.visitedCountries.reduce((data, country) => {
      data[country.alpha3] = { fillKey: 'visited' }
      return data
    }, {})
    this.map.updateChoropleth(mapData)
  }

  componentDidUpdate () {
    this.updateVisitedCountries()
  }

  render () {
    const fullWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width

    return (
      <section id='map' className={`map map-${this.props.visitedCountries.length}`} style={{minHeight: (fullWidth * WORLD_MAP_RATIO) + 'px'}} />
    )
  }
}

WorldMap.propTypes = {
  visitedCountries: React.PropTypes.array
}
