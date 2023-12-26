import axios from 'axios'
import 'dotenv/config'

const instance = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_HOST || 'localhost'}:${process.env.EXPO_PUBLIC_PORT || '3001'}`
})

export default instance;