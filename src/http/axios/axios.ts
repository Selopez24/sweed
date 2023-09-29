import axios, { InternalAxiosRequestConfig } from "axios"
import config from "config"
import * as SecureStore from 'expo-secure-store'
import { ACCESS_TOKEN } from "src/constants/secureStore"

const http = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
    timeout: 3000
  }
})

http.interceptors.request.use(async (axiosConfig) => {
  const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN)

  const authHeader = { 'Authorization': `Bearer ${accessToken}` }
  return { ...axiosConfig, headers: { ...axiosConfig.headers, ...authHeader } } as InternalAxiosRequestConfig
})

export default http
