import axios from 'axios'

export default function api (base = false) {
  const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_API_PATH,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${base ? process.env.REACT_APP_BASE_TOKEN : ''}`
    }
  })

  makeRequest.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  makeRequest.interceptors.response.use(response => {
    return response
  }, error => {
    const code = error && error.response ? error.response.status : 0

    if (code === 401 || code === 403 || code === 419) {
      window.location.replace('/login')
    }

    return Promise.reject(error)
  })

  return makeRequest
}
