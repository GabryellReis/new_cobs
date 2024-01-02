import axios from 'axios'

const instance = axios.create({
  baseURL: `https://192.168.168.97:3001`
})

export default instance;