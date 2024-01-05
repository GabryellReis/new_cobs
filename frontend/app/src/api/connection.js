import axios from 'axios'

const instance = axios.create({
  baseURL: `http://192.168.1.69:3001`
})

export default instance;