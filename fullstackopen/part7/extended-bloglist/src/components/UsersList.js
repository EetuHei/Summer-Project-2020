import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'react-bootstrap'

const UsersList = (props) => {
  console.log('props in users: ', props)

  return (
    <div>
      <Jumbotron>
        <h2>Users</h2>
        <div>
          <ul>blogs created</ul>
          {props.usersData.map((data) => (
            <div style={{ height: '20px' }} key={data.id}>
              <Link
                style={{
                  color: 'inherit',
                  marginRight: '5px',
                  textDecoration: 'underline',
                }}
                to={`/users/${data.id}`}
              >
                <p>
                  {data.name} {data.blogs.length}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Jumbotron>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { usersData: state.users }
}

export default connect(mapStateToProps, null)(UsersList)
