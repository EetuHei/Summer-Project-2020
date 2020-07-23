import React from 'react'
import { connect } from 'react-redux'
import { addNew, initNotification } from '../reducers/Actions'

const AnecdoteForm = (props) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputValue = e.target.create.value
    props.addNew(inputValue)
    props.initNotification(`'${inputValue}' was added`, 5)
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

const mapDispatchToProps = {
  addNew,
  initNotification,
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
