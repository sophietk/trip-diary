import React from 'react'
import Datamap from 'datamaps'

const WORLD_MAP_RATIO = 475 / 700

export default class CountryMap extends React.Component {
  componentDidMount () {
    this.map = new Datamap({
      element: document.getElementById('map'),
      projection: 'mercator',
      scope: this.props.countryId.toLowerCase(),
      fills: {
        defaultFill: '#e7dbcb', // cf. _colors.scss $color-brown-light
        visited: '#2dced1' // cf. _colors.scss $color-blue
      },
      geographyConfig: {
        highlightFillColor: '#f8f7f4', // cf. _colors.scss $color-beige-light
        highlightBorderColor: '#2dced1', // cf. _colors.scss $color-brown
        highlightBorderWidth: 2,
        highlightBorderOpacity: 0.5
      }
    })
  }

  render () {
    const fullWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width // eslint disable no-undef

    return (
      <section id='map' className='map' style={{minHeight: (fullWidth * WORLD_MAP_RATIO) + 'px'}} />
    )
  }
}

CountryMap.propTypes = {
  countryId: React.PropTypes.string.isRequired
}
