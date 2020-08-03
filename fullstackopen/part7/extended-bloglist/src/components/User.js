import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const User = (props) => {
  console.log('props in User component: ', props)

  const user = props.userData.filter(
    (user) => user.id === props.match.params.id
  )

  if (user.length !== 1) {
    return <Redirect to='/' />
  }
  return (
    <div>
      <h1>{user[0].name}</h1>
      <h3>added blogs</h3>
      {user[0].blogs.map((blog) => (
        <div style={{ marginLeft: '20px' }}>
          <li>{blog.title}</li>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.users }
}

export default connect(mapStateToProps, null)(User)
