import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  const getAll = async () => {
    const res = await axios.get(baseUrl)
    return setResources(res.data)
  }

  const create = async (resource) => {
    const res = await axios.post(baseUrl, resource)
    return setResources([...resources, res.data])
  }

  const service = {
    create,
    getAll
  }

  return [resources, service]
}
