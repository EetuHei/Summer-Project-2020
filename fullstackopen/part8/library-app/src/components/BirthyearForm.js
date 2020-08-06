import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ALL_BOOKS, EDIT_AUTHOR } from '../service/queries'

const BirthyearForm = (props) => {
  const [name, setName] = useState('')
  const [setBornTo, setBorn] = useState('')

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_BOOKS }],
    onError: (error) => {
      props.setError(error.graphQLErrors[0].message)
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    editAuthor({ variables: { name, setBornTo } })

    setName('')
    setBorn('')
  }

  return (
    <div>
      <h2>set birthyear</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born
          <input
          type='number'
            value={setBornTo}
            onChange={({ target }) => setBorn(parseInt(target.value))}
          />
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default BirthyearForm
