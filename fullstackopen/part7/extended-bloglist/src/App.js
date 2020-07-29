import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import AuthServices from './services/auth'
import LoginForm from './components/auth/LoginForm'
import LogoutForm from './components/auth/LogoutForm'
import BlogForm from './components/BlogForm'
import Alert from './components/Alert'
import Togglable from './components/Togglable'
import { connect } from 'react-redux'
import { loginUser, logoutUser, setAlert } from './reducers/Actions'
import { useSelector } from 'react-redux'

const App = (props) => {
  const user = useSelector((state) => state.login)

  const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      sortBlogs(blogs)
      setBlogs(blogs)
    })
  }, [])

  if (user) {
    window.localStorage.setItem('token', user.token)
    window.localStorage.setItem('userData', JSON.stringify(user))
  }

  const handleLogin = async (username, password) => {
    const res = await props.loginUser(username, password)
    if (res.token) {
      props.setAlert(`${res.name} logged in`, 5, 'green')
    } else if (!res || res.data.error) {
      props.setAlert(res.data.error, 5, 'red')
    }
  }

  const handleLogout = () => {
    window.localStorage.clear()
    props.logoutUser()
  }

  const handleBlogSubmit = async (e, title, author, url) => {
    e.preventDefault()
    const submitBlog = await blogService.addNew({ title, author, url })
    if (!submitBlog || submitBlog.status === 400) {
      setMessage({ message: submitBlog.data.error, color: 'red' })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    } else if (submitBlog.status === 500) {
      setMessage({ message: submitBlog.data.error.message, color: 'red' })
    } else if (submitBlog) {
      setMessage({ message: submitBlog, color: 'green' })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      setBlogs([...blogs].concat(submitBlog))
    }
  }

  const handleDelete = (e, blog) => {
    e.preventDefault()
    const res = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)

    if (res) {
      blogService.deleteById(blog)
      const blogsAfter = blogs.filter((i) => i.id !== blog.id)
      setBlogs(blogsAfter)
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

      <Togglable buttonLabel='create new blog'>
        <BlogForm user={user} handleBlogSubmit={handleBlogSubmit} />
      </Togglable>

      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          currentUser={user}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}

const mapDispatchToProps = {
  loginUser,
  logoutUser,
  setAlert,
}

export default connect(null, mapDispatchToProps)(App)
