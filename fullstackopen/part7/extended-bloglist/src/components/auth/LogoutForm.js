import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../reducers/Actions'

const LogoutForm = (props) => {
  if (props) {
    return (
      <>
        <p>
          {`${props.userData.name} logged in.`}
          <button type='button' onClick={() => props.logoutUser()}>
            Logout
          </button>
        </p>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { userData: state.auth }
}

const mapDispatchToProps = {
  logoutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm)
