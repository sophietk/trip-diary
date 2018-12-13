import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import Signin from './signin.jsx'
import Subscribe from './subscribe.jsx'

export default class LayoutLanding extends React.Component {
  componentDidMount () {
    document.querySelector('html').classList.add('landing')
  }

  componentWillUnmount () {
    document.querySelector('html').classList.remove('landing')
  }

  render () {
    return (
      <Switch>
        <Route path='/start/signin' component={Signin} />
        <Route path='/start/subscribe' component={Subscribe} />
        <Redirect path='*' to='/start/signin' />
      </Switch>
    )
  }
}

LayoutLanding.propTypes = {
  main: PropTypes.object
}
