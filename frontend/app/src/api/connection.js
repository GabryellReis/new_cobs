import axios from 'axios'

const instance = axios.create({
  baseURL: `http://192.168.168.207:3001`
})

export default instance;