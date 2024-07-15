import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// Interceptador de requisição
api.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})


// Interceptador de resposta
api.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
}, error => {
  console.error('Response Error:', error)
  return Promise.reject(error)
})
