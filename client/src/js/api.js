function jsonFetch (url, options) {
  return fetch(url, Object.assign({
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }, options))
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
}

function post (url, data) {
  return jsonFetch(url, {
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
}

export default new Api()
