import React from 'react'
import Datamap from 'datamaps'
import d3 from 'd3'

const WORLD_MAP_RATIO = 475 / 700

export default class CountryMap extends React.Component {
  componentDidMount () {
    const alpha3 = this.props.country.alpha3

    this.map = new Datamap({
      element: document.getElementById('map'),
      projection: 'mercator',
      // scope: alpha3.toLowerCase(),
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
      data: {
        [alpha3]: { fillKey: this.props.country.visited ? 'visited' : 'default' }
      }
    })

    // remove other countries
    Array.from(document.querySelectorAll('.datamaps-subunit'))
      .filter(countryPath => countryPath.classList[1] !== alpha3)
      .forEach(countryPath => countryPath.remove())

    // zoom
    this.map.svg.style.transform = 'scale(10)'
  }

  render () {
    const fullWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width

    return (
      <section id='map' className='map' style={{ minHeight: (fullWidth * WORLD_MAP_RATIO) + 'px'}} />
    )
  }
}

CountryMap.propTypes = {
  country: React.PropTypes.object.isRequired
}
