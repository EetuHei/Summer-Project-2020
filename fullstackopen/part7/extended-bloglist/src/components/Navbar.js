import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../reducers/Actions'
import { Navbar, Nav, Button } from 'react-bootstrap'

const NavbarComponent = (props) => {
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
    backgroundColor: 'darkgrey',
  }

  return (
    <div style={{ padding: '5' }}>
      <Navbar bg='dark' variant='dark' expand='md'>
        <Nav className='mr-auto' style={{ color: '#fff' }}>
          <Link
            style={{
              color: 'inherit',
              marginRight: '5px',
              textDecoration: 'underline',
            }}
            to='/'
          >
            blogs
          </Link>
          <Link
            style={{
              color: 'inherit',
              marginRight: '5px',
              textDecoration: 'underline',
            }}
            to='/users'
          >
            users
          </Link>
          {props.userData.name} logged in{' '}
          <Button
            size='sm'
            variant='outline-secondary'
            style={{ color: '#fff', marginLeft: '5px' }}
            onClick={() => props.logoutUser()}
          >
            logout
          </Button>
        </Nav>
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.auth }
}

const mapDispatchToProps = {
  logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
