;(function () {
  document.querySelector('#signin').addEventListener('submit', event => {
    event.preventDefault()

    window.location.href = 'logged.html'
  })
})()
