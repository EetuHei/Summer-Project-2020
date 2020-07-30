import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginUser, setAlert } from '../../reducers/Actions'
import { useField } from '../../hooks/useField'

const LoginForm = (props) => {
  const username = useField('text')
  const password = useField('password')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await props.loginUser(username.value, password.value)
    if (res !== undefined) {
      props.setAlert(res.data.error, 5, 'red')
    }
  }

  return (
    <>
      {!props.userData ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='username'
              placeholder='Username'
              {...username}
            />
            <input
              type='password'
              id='password'
              placeholder='Password'
              {...password}
            />
            <button id='login-button'>login</button>
          </form>
        </>
      ) : (
        ''
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.auth }
}

const mapDispatchToProps = {
  loginUser,
  setAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
