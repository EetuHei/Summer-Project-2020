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
            type="text"
            value={username}
            onChange={changeUsername}
            placeholder="Username"
          />{' '}
          <input
            type="password"
            value={password}
            onChange={changePassword}
            placeholder="Password"
          />{' '}
          <button
            onClick={() => {
              handleLogin(username, password)
            }}
          >
            Login
          </button>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default LoginForm
