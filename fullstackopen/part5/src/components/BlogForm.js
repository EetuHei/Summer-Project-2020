import React, { useState } from 'react'

const BlogForm = ({ user, handleBlogSubmit }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeAuthor = (e) => {
    setAuthor(e.target.value)
  }

  const changeUrl = (e) => {
    setUrl(e.target.value)
  }

  if (user) {
    return (
      <form onSubmit={(e) => handleBlogSubmit(e, title, author, url)}>
        <h2>Create new</h2>
        <p>
          Title:{' '}
          <input type='text' id='title' value={title} onChange={changeTitle} />
        </p>
        <p>
          Author:
          <input
            type='text'
            id='author'
            value={author}
            onChange={changeAuthor}
          />
        </p>
        <p>
          Url: <input type='text' id='url' value={url} onChange={changeUrl} />
        </p>
        <button
          id='submit'
          type='submit'

        >
          create
        </button>
        <div></div>
      </form>
    )
  }
}

export default BlogForm
