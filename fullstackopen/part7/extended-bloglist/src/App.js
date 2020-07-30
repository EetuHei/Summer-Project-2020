import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import { Switch, Route, Redirect, Link, useLocation } from 'react-router-dom'
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

  let location = useLocation

  if (props.data.auth) {
    window.localStorage.setItem('token', props.data.auth.token)
    window.localStorage.setItem('userData', JSON.stringify(props.data.auth))
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
        <BlogForm />
      </Togglable>

      {props.data.blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
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
