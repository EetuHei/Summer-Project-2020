import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.create.value
    dispatch({
      type: "ADD", data: inputValue
    })
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
