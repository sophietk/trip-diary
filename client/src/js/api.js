function get (url, options) {
  return fetch(url, Object.assign({
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    method: 'get'
  }, options))
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
}

function post (url, data) {
  return get(url, {
    method: 'post',
    body: JSON.stringify(data)
  })
}

class Api {
  signup (data) {
    return post('/api/signup', {
      name: data.name,
      email: data.email,
      password: data.password
    })
  }

  signin (data) {
    return post('/api/signin', {
      email: data.email,
      password: data.password
    })
  }

  listCountries () {
    return get('/api/countries')
  }

  addCountry (alpha3) {
    return post('/api/countries', {
      alpha3: alpha3
    })
  }
}

export default new Api()
