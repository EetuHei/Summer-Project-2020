import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks/useField'
import { addBlog, setAlert } from '../reducers/Actions'

const BlogForm = (props) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const handleBlogSubmit = async (e) => {
    e.preventDefault()
    const res = await props.addBlog(title.value, author.value, url.value)
    if (!res || res.status === 400) {
      props.setAlert(res.data.error, 5, 'red')
    } else if (res.status === 500) {
      props.setAlert(res.data.error)
    } else if (res) {
      props.setAlert(res, 5, 'green')
    }
  }

  if (props.userData.token) {
    return (
      <form onSubmit={handleBlogSubmit}>
        <h2>Create new</h2>
        <p>
          Title: <input type='text' id='title' {...title} />
        </p>
        <p>
          Author:
          <input type='text' id='author' value={author} {...author} />
        </p>
        <p>
          Url: <input type='text' id='url' {...url} />
        </p>
        <button id='submit' type='submit'>
          create
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { userData: state.auth }
}

const mapDispatchToProps = {
  addBlog,
  setAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm)
