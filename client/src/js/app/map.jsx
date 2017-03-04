import React from 'react'
import Datamap from 'datamaps'

const WORLD_MAP_RATIO = 475 / 700

export default class Map extends React.Component {
  componentDidMount () {
    const mapData = this.props.visitedCountries.reduce((data, country) => {
      data[country.code] = { fillKey: 'visited' }
      return data
    }, {})
    const map = new Datamap({
      element: document.getElementById('map'),
      projection: 'mercator',
      fills: {
        defaultFill: '#e7dbcb', // cf. _colors.scss $color-brown-light
        visited: '#2dced1' // cf. _colors.scss $color-blue
      },
      data: mapData,
      geographyConfig: {
        highlightFillColor: '#f8f7f4', // cf. _colors.scss $color-beige-light
        highlightBorderColor: '#2dced1', // cf. _colors.scss $color-brown
        highlightBorderWidth: 2,
        highlightBorderOpacity: 0.5
      }
    })
  }

  render () {
    const fullWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width

    return (
      <section id='map' className='map' style={{minHeight: (fullWidth * WORLD_MAP_RATIO) + 'px'}} />
    )
  }
}

Map.propTypes = {
  visitedCountries: React.PropTypes.array
}
