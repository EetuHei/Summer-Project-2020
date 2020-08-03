import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const UsersList = (props) => {
  console.log('props in users: ', props)

  return (
    <div>
      <h2>Users</h2>
      <div>
        <ul>blogs created</ul>
        {props.usersData.map((data) => (
          <div key={data.id}>
            <Link to={`/users/${data.id}`}>
              <p>{data.name}  {data.blogs.length}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { usersData: state.users }
}

export default connect(mapStateToProps, null)(UsersList)
