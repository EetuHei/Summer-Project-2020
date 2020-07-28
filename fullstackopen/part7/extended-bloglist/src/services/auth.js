import axios from 'axios'
const baseUrl = '/api/v1'

const login = async (credentials) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, credentials)
    return res.data
  } catch (e) {
    console.error(e)
    return e.response
  }
}

export default { login }
