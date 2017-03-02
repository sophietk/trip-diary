import React from 'react'
import { render } from 'react-dom'

import Signin from './signin.jsx'

class App extends React.Component {
  render () {
    return (
      <Signin />
    )
  }
}

render(<App />, document.getElementById('app'))
