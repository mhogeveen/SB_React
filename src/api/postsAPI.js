import axios from 'axios'

export default axios.create({
   baseURL: 'http://178.62.198.162/api/',
   headers: {
      Token: 'pj11daaQRz7zUIH56B9Z',
   },
})
