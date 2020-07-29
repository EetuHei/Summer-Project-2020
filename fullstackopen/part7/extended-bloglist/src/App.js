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
import { useSelector } from 'react-redux'

const App = (props) => {
  const user = useSelector((state) => state.login)
  const blogs = useSelector((state) => state.blogs)

  const [message, setMessage] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      await props.initBlogs()
    }
    fetchData()
  }, [props])

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
      const blogsAfter = blogs.filter((i) => i.id !== blog.id)
      // add action call to handle blog delete
    }
  }

  const sortBlogs = (blogs) => {
    blogs.sort((a, b) => {
      return b.likes - a.likes
    })
  }

  sortBlogs(blogs)

  if (!user) {
    return (
      <div>
        <h2>Login in to application</h2>
        <Alert />
        <LoginForm user={user} handleLogin={handleLogin} />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Alert />
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
  initBlogs,
}

export default connect(null, mapDispatchToProps)(App)
