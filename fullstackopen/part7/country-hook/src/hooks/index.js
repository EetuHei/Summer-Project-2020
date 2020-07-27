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

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)
  const baseUrl = `https://restcountries.eu/rest/v2/name/${name}`

  useEffect(() => {
    if (!name) return
    const fetchData = async () => {
      try {
        if (name) {
          const res = await axios.get(`${baseUrl}`)
          if (res) setCountry({ data: res.data[0], found: true })
        }
      } catch (e) {
        setCountry({ data: null, found: false })
        console.error(e)
        throw e
      }
    }
    fetchData()
  }, [name])

  console.log('country state: ', country)

  return country
}
