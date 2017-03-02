import api from './api'

;(function () {
  document.querySelector('#signin').addEventListener('submit', event => {
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
  })
})()
