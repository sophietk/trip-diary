import React from 'react'
import { Link } from 'react-router'

import api from '../api'

export default class Signin extends React.Component {
  submit (event) {
    event.preventDefault()
    const formData = new FormData(this.form)
    api.signin({
      email: formData.get('email'),
      password: formData.get('password')
    })
      .then(json => {
        browserHistory.push('/app')
      })
      .catch(alert)
  }

  render () {
    return (
      <form
        id='signin'
        className='landing-form'
        onSubmit={this.submit.bind(this)}
        ref={form => {
               this.form = form}}>
        <input
          className='landing-form-el input'
          name='email'
          type='email'
          required
          placeholder='Email' />
        <input
          className='landing-form-el input'
          name='password'
          type='password'
          required
          placeholder='Password' />
        <button className='landing-form-el btn' type='submit'>
          Log in
        </button>
        <div className='landing-links'>
          <Link to='/start/subscribe' className='link link--white' href=''> Subscribe
          </Link> |
          <Link className='link link--white' href=''> Forget my password
          </Link>
        </div>
      </form>
    )
  }
}
