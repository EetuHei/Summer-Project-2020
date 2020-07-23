import React from 'react'
import { useDispatch } from 'react-redux'
import { addNew, initNotification } from '../reducers/Actions'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputValue = e.target.create.value
    dispatch(addNew(inputValue))
    dispatch(initNotification(`you voted '${inputValue}'`, 5))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name='create' />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
