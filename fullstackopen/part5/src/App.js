import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import AuthServices from './services/auth'
import LoginForm from './components/auth/LoginForm'
import LogoutForm from './components/auth/LogoutForm'
import BlogForm from './components/BlogForm'
import Alert from './components/Alert'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      sortBlogs(blogs)
      setBlogs(blogs)
    })
  }, [])

  useEffect(() => {
    window.localStorage.getItem('token')
    const user = JSON.parse(window.localStorage.getItem('userData'))
    setUser(user)
  }, [])

  const handleLogin = async (username, password) => {
    const user = await AuthServices.login({ username, password })
    if (!user || user.status === 401) {
      setMessage({ message: user.data.error, color: 'red' })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } else {
      window.localStorage.setItem('token', user.token)
      window.localStorage.setItem('userData', JSON.stringify(user))
      setUser(user)
    }
  }

  const handleLogout = () => {
    window.localStorage.clear()
    setUser(null)
  }

  const handleBlogSubmit = async (title, author, url) => {
    const submitBlog = await blogService.addNew({ title, author, url })

    if (!submitBlog || submitBlog.status === 400) {
      setMessage({ message: submitBlog.data.error, color: 'red' })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } else if (submitBlog) {
      setMessage({ message: submitBlog, color: 'green' })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setBlogs([...blogs].concat(submitBlog))
    }
  }

  const sortBlogs = (blogs) => {
    blogs.sort((a, b) => {
      return b.likes - a.likes
    })
  }

  if (!user) {
    return (
      <div>
        <h2>Login in to application</h2>
        <Alert message={message} />
        <LoginForm user={user} handleLogin={handleLogin} />
      </div>
    )
  }
  return (
    <div>
      <h2>blogs</h2>
      <Alert message={message} />
      <LogoutForm user={user} handleLogout={handleLogout} />

      <Togglable buttonLabel="create new blog">
        <BlogForm user={user} handleBlogSubmit={handleBlogSubmit} />
      </Togglable>

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  )
}

export default App
