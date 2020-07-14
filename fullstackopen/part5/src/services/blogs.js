import axios from 'axios'
const baseUrl = '/api/v1/blogs'
const config = {
  headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` },
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  console.log(res.data)
  return res.data
}

const addNew = async (data) => {
  try {
    const res = await axios.post(baseUrl, data, config)
    return res.data
  } catch (e) {
    console.error(e)
    return e.response
  }
}

export default { getAll, addNew }
