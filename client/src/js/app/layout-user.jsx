import React from 'react'

export default class LayoutUser extends React.Component {
  render () {
    return (
      <div>
        {this.props.main}
        <div className='footer-pusher' />
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
