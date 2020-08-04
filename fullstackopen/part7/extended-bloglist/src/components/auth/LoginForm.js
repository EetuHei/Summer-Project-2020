import React from 'react'
import { connect } from 'react-redux'
import { loginUser, setAlert } from '../../reducers/Actions'
import { useField } from '../../hooks/useField'
import { Button, Form, Container } from 'react-bootstrap'

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
          <Container>
            <h2>Login in to application</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                id='username'
                placeholder='Username'
                {...username}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                id='password'
                placeholder='Password'
                {...password}
              />
              <Button
                size='md'
                variant='outline-secondary'
                id='login-button'
                type='submit'
              >
                login
              </Button>
            </Form>
          </Container>
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
