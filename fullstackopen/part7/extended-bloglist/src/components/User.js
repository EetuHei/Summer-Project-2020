import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'

const User = (props) => {
  const user = props.userData.filter(
    (user) => user.id === props.match.params.id
  )

  if (user.length !== 1) {
    return <Redirect to='/' />
  }
  return (
    <div>
      <Jumbotron>
        <h1>{user[0].name}</h1>
        <h3>added blogs</h3>
        {user[0].blogs.map((blog) => (
          <div key={blog.id} style={{ marginLeft: '20px' }}>
            <Link to={`/blogs/${blog.id}`}>
              {' '}
              <li>{blog.title}</li>
            </Link>
          </div>
        ))}
      </Jumbotron>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { userData: state.users }
}

export default connect(mapStateToProps, null)(User)
