import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import World from './world.jsx'
import Country from './country.jsx'

export default class LayoutUser extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path='/app/world' component={World} />
          <Route path='/app/country/:countryId' component={Country} />
          <Redirect path='*' to='/app/world' />
        </Switch>
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
