import React from 'react'
import { connect } from 'react-redux'

const Alert = (props) => {
  if (props.message.message === null) {
    return null
  }
  const alertStyle = {
    color: props.message.color,
    background: 'lightGrey',
    fontSize: '26px',
    borderStyle: 'solid',
    borderRadius: '1px',
    padding: '10px',
    marginBottom: '10px',
  }
  return (
    <>
      {props.message.message.title ? (
        <h3 style={alertStyle}>
          a new blog: {props.message.message.title} by {props.message.message.author}
        </h3>
      ) : (
        <h3 style={alertStyle}>{props.message.message}</h3>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return { message: state.alert }
}

export default connect(mapStateToProps, null)(Alert)
