import React from 'react'
import { Link } from 'react-router-dom'
import LogoutForm from './auth/LogoutForm'
import { connect } from 'react-redux'
import { logoutUser } from '../reducers/Actions'

const Navbar = (props) => {
  
    const padding = {
    paddingRight: 5,
  }

  let container = {
    display: '',
    marginTop: 10,
    padding: 5,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: 'darkgrey'
  }

  return (
    <div style={container}>
      <Link style={padding} to='/'>
        blogs
      </Link>
      <Link style={padding} to='/users'>
        users
      </Link>
      {props.userData.name} logged in{' '}
      <button onClick={() => props.logoutUser()}>logout</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.auth }
}

const mapDispatchToProps = {
  logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
