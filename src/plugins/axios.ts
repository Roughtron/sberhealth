import axios, { AxiosResponse, AxiosError } from 'axios'

function errorResponseHandler (error: AxiosError) {
  return Promise.reject(error)
}

function responseHandler (response: AxiosResponse) {
  return response
}

const _axios = axios.create({
  baseURL: process.env.VUE_APP_BASE
})

_axios.interceptors.response.use(
  responseHandler,
  errorResponseHandler
)

export default _axios
