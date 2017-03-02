import React from 'react'

import api from './api'

export default class Signin extends React.Component {
  submit (event) {
    event.preventDefault()
    const formData = new FormData(document.getElementById('signin'))
    api.signin({
      email: formData.get('email'),
      password: formData.get('password')
    })
      .then(json => {
        window.location.href = 'logged.html'
      })
      .catch(alert)
  }

  render () {
    return (
      <form id='signin' className='landing-form' onSubmit={this.submit.bind(this)}>
        <input
          className='landing-form-el input'
          name='email'
          type='email'
          placeholder='Email' />
        <input
          className='landing-form-el input'
          name='password'
          type='password'
          placeholder='Password' />
        <button className='landing-form-el btn' type='submit'>
          Log in
        </button>
        <div className='landing-links'>
          <a className='link link--white' href=''>Subscribe</a> |
          <a className='link link--white' href=''>Forget my password</a>
        </div>
      </form>
    )
  }
}
