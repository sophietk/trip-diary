import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import Subscribe from './subscribe.jsx'
import Signin from './signin.jsx'

render((
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRedirect to='signin' />
      <Route path='subscribe' component={Subscribe} />
      <Route path='signin' component={Signin} />
    </Route>
  </Router>
  ), document.getElementById('app'))
