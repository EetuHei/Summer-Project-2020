import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useField } from '../hooks'

const CreateNew = (props) => {
  const { reset: resetContent, ...content } = useField('text')
  const { reset: resetAuthor, ...author } = useField('text')
  const { reset: resetInfo, ...info } = useField('text')

  const [redirect, setRedirect] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setRedirect(true)
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })
  }

  const resetFields = () => {
    resetContent()
    resetAuthor()
    resetInfo()
  }

  if (redirect) return <Redirect to='/' />

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
        <button type='button' onClick={() => resetFields()}>
          reset
        </button>
      </form>
    </div>
  )
}

export default CreateNew
