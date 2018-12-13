import React from 'react'
import { Link } from 'react-router-dom'

import api from '../api'

export default class Subscribe extends React.Component {
  submit (event) {
    event.preventDefault()
    const formData = new FormData(this.form)
    api.signup({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    })
      .then(json => {
        this.props.history.push('/app')
      })
      .catch(alert)
  }

  render () {
    return (
      <form
        id='subscribe'
        className='landing-form'
        onSubmit={this.submit.bind(this)}
        ref={form => {
          this.form = form
        }}>
        <input
          className='landing-form-el input'
          name='name'
          type='text'
          required
          placeholder='Name' />
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
          Subscribe
        </button>
        <div className='landing-links'>
          <Link to='/start/signin' className='link link--white' href=''> Sign in
          </Link>
        </div>
      </form>
    )
  }
}
