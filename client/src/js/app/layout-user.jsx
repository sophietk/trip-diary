import React from 'react'

export default class LayoutUser extends React.Component {
  render () {
    return (
      <div>
        <header className='header'>
          <h1 className='header-title'>Mon carnet de <span className='header-title--big'>voyages</span></h1>
        </header>
        {this.props.main}
        <div className='footer-pusher'></div>
        <footer className='footer'>
          <div className='footer-links'>
            <a className='link link--white' href=''>Contact</a> | <a className='link link--white' href=''>En savoir plus</a>
          </div>
        </footer>
      </div>
    )
  }
}

LayoutUser.propTypes = {
  main: React.PropTypes.object
}
