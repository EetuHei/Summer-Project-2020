import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/auth/LoginForm'
import LogoutForm from './components/auth/LogoutForm'
import BlogForm from './components/BlogForm'
import Alert from './components/Alert'
import Togglable from './components/Togglable'
import { connect } from 'react-redux'
import { loginUser, logoutUser, setAlert, initBlogs } from './reducers/Actions'

const App = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      await props.initBlogs()
    }
    fetchData()
  }, [])

  if (props.data.auth) {
    window.localStorage.setItem('token', props.data.auth.token)
    window.localStorage.setItem('userData', JSON.stringify(props.data.auth))
  }

  // make action to add blogs and tie it to reducers

  const handleBlogSubmit = async (e, title, author, url) => {
    e.preventDefault()
    const submitBlog = await blogService.addNew({ title, author, url })
    if (!submitBlog || submitBlog.status === 400) {
      props.setAlert(submitBlog.data.error, 5, 'red')
    } else if (submitBlog.status === 500) {
      props.setAlert(submitBlog.data.error.message, 5, 'red')
    } else if (submitBlog) {
      props.setAlert(submitBlog, 5, 'green')
      //add action call to handle adding of new blog
    }
  }

  const handleDelete = (e, blog) => {
    e.preventDefault()
    const res = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)

    if (res) {
      blogService.deleteById(blog)
      const blogsAfter = props.data.blogs.filter((i) => i.id !== blog.id)
      // add action call to handle blog delete
    }
  }

  const sortBlogs = (blogs) => {
    blogs.sort((a, b) => {
      return b.likes - a.likes
    })
  }

  sortBlogs(props.data.blogs)

  if (!props.data.auth) {
    return (
      <div>
        <h2>Login in to application</h2>
        <Alert />
        <LoginForm />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Alert />
      <LogoutForm />

      <Togglable buttonLabel='create new blog'>
        <BlogForm user={props.data.auth} handleBlogSubmit={handleBlogSubmit} />
      </Togglable>

      {props.data.blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          currentUser={props.data.auth}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { data: state }
}

const mapDispatchToProps = {
  loginUser,
  logoutUser,
  setAlert,
  initBlogs,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
