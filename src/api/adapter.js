const loginHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Accepts': 'application/json',
    token: localStorage.getItem('token')
  }
}

const api = {

  login: (email, password) => {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: loginHeaders(),
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(r => r.json())
  },

  postUser: (user) => {
    console.log(user)
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(res => res.json())
  },

  getAllBeers: () => {
    return fetch('http://localhost:3000/beers')
      .then(res => res.json())
  },

  postNewBeer: (beer) => {
    return fetch('http://localhost:3000/beers', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(beer)
    }).then(res => res.json())
  },

  patchBeer: (beer) => {
    return fetch(`http://localhost:3000/beers/${beer.id}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(beer)
    })
  },

  getAllBreweries: () => {
    return fetch('http://localhost:3000/breweries')
      .then(res => res.json())
  },

  getAllReviews: () => {
    return fetch('')
  }

}

export default api

