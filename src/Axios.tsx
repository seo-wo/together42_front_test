import axios from "axios"

export const api = axios.create({
  baseURL: 'http://localhost:4242/api',
  withCredentials: true,
})