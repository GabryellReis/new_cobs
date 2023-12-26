import axios from 'axios'
import 'dotenv/config'

const instance = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_HOST}:${process.env.EXPO_PUBLIC_PORT}`
})

export default instance;