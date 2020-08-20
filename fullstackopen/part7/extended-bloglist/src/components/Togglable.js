import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  return (
    <>
      <div style={hideWhenVisible}>
        <Button
          size='md'
          variant='outline-secondary'
          id='newBlog'
          onClick={toggleVisibility}
        >
          {props.buttonLabel}
        </Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button
          size='md'
          variant='outline-secondary'
          onClick={toggleVisibility}
        >
          cancel
        </Button>
      </div>
    </>
  )
}

Togglable.propTypes = {
  buttonLabel: propTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return { alertState: state }
}

export default connect(mapStateToProps, null)(Togglable)
