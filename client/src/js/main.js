;(function () {
  document.querySelector('#signin').addEventListener('submit', event => {
    event.preventDefault()

    location.href = 'logged.html'
  })
})()
