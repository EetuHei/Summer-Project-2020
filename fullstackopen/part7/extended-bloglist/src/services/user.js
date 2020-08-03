import axios from 'axios'
const baseUrl = '/api/v1/users'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export default { getAll }
