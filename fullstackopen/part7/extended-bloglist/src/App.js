import React, { useEffect } from 'react'
import Blog from './components/Blog'
import { Switch, Route } from 'react-router-dom'
import LoginForm from './components/auth/LoginForm'
import BlogForm from './components/BlogForm'
import UsersList from './components/UsersList'
import User from './components/User'
import Alert from './components/Alert'
import Togglable from './components/Togglable'
import BlogView from './components/BlogView'
import NavbarComponent from './components/Navbar'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
  loginUser,
  logoutUser,
  setAlert,
  initBlogs,
  initUsers,
} from './reducers/Actions'

const App = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      await props.initBlogs()
      await props.initUsers()
    }
    fetchData()
  }, [])

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
        <Alert />
        <LoginForm />
      </div>
    )
  }

  return (
    <div>
      <NavbarComponent />
      <Container style={{ padding: '5' }}>
        <h2>blog app</h2>
        <Alert />
        <Switch>
          <Route path='/users' exact component={UsersList} />
          <Route path='/users/:id' exact component={User} />
          <Route path='/blogs/:id' exact component={BlogView} />
          <Route path='/' exact>
            <Togglable buttonLabel='create new blog'>
              <BlogForm />
            </Togglable>

            {props.data.blogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </Route>
        </Switch>
      </Container>
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
  initUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
