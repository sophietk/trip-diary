import React from 'react'

export default class LayoutLanding extends React.Component {
  componentDidMount () {
    document.querySelector('html').classList.add('landing')
  }

  componentWillUnmount () {
    document.querySelector('html').classList.remove('landing')
  }

  render () {
    return this.props.main
  }
}

LayoutLanding.propTypes = {
  main: React.PropTypes.object
}
