import axios from 'axios'
const baseUrl = '/api/v1/blogs'
const config = {
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
  },
}

const getAll = async () => {
  const res = await axios.get(baseUrl)

  return res.data
}

const addNew = async (data) => {
  console.log(data, config)
  try {
    const res = await axios.post(baseUrl, data, config)
    return res.data
  } catch (e) {
    console.error(e)
    return e.response
  }
}

const updateById = async (data) => {
  try {
    const res = await axios.put(`${baseUrl}/${data.id}`, data)
    return res.data
  } catch (e) {
    console.error(e.response)
    return e.response
  }
}

const deleteById = async (data) => {
  try {
    await axios.delete(`${baseUrl}/${data.id}`, config)
  } catch (e) {
    console.error(e.response)
  }
}

export default { getAll, addNew, updateById, deleteById }
