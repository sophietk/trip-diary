import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import LayoutLanding from './start/layout-landing.jsx'
import Signin from './start/signin.jsx'
import Subscribe from './start/subscribe.jsx'
import LayoutUser from './app/layout-user.jsx'
import VisitedCountries from './app/visited-countries.jsx'

render((
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRedirect to='start' />
      <Route path='start' component={LayoutLanding}>
        <IndexRedirect to='signin' />
        <Route path='signin' components={{main: Signin}} />
        <Route path='subscribe' components={{main: Subscribe}} />
      </Route>
      <Route path='app' component={LayoutUser}>
        <IndexRedirect to='visited-countries' />
        <Route path='visited-countries' components={{main: VisitedCountries}} />
      </Route>
    </Route>
  </Router>
  ), document.getElementById('app'))
