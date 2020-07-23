import axios from 'axios'
import { asObject } from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:8080/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (data) => {
  const object = asObject(data)
  const res = await axios.post(baseUrl, object)
  return res.data
}

const updateById = async (dataObj) => {
  const res = await axios.put(`${baseUrl}/${dataObj.id}`, dataObj)
  return res.data
}

export default { getAll, createNew, updateById }
