import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import LayoutLanding from './start/layout-landing.jsx'
import Signin from './start/signin.jsx'
import Subscribe from './start/subscribe.jsx'
import LayoutUser from './app/layout-user.jsx'
import World from './app/world.jsx'
import Country from './app/country.jsx'

render((
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRedirect to='start' />
      <Route path='start' component={LayoutLanding}>
        <IndexRedirect to='signin' />
        <Route path='signin' components={{main: Signin}} />
        <Route path='subscribe' components={{main: Subscribe}} />
      </Route>
      <Route path='app'>
        <IndexRedirect to='world' />
        <Route path='world' component={World} />
        <Route path='country'>
          <Route path=':countryId' component={Country} />
        </Route>
      </Route>
    </Route>
  </Router>
  ), document.getElementById('app'))
