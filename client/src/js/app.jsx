import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LayoutLanding from './start/layout-landing.jsx'
import LayoutUser from './app/layout-user.jsx'

render((
  <BrowserRouter>
    <Switch>
      <Route path='/start' component={LayoutLanding} />
      <Route path='/app' component={LayoutUser} />
      <Redirect path='*' to='/start' />
    </Switch>
  </BrowserRouter>
  ), document.getElementById('app'))
