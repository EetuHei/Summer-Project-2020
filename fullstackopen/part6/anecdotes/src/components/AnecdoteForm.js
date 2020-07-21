import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addNew} from "../reducers/Actions"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.create.value
    dispatch(addNew(inputValue))
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
