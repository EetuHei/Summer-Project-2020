import React, { useState } from 'react'

const LoginForm = ({ user, handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      {!user ? (
        <>
          <input
            type='text'
            id='username'
            value={username}
            onChange={changeUsername}
            placeholder='Username'
          />{' '}
          <input
            type='password'
            id='password'
            value={password}
            onChange={changePassword}
            placeholder='Password'
          />{' '}
          <button
            id='login-button'
            onClick={() => {
              handleLogin(username, password)
            }}
          >
            login
          </button>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default LoginForm
