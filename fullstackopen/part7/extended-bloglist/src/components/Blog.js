import React from 'react'
import { connect } from 'react-redux'
import { likeBlog, deleteBlog } from '../reducers/Actions'
import { Link } from 'react-router-dom'
import { Container, ListGroup } from 'react-bootstrap'

const Blog = (props) => {
  let blogStyle = {
    display: '',
    marginTop: 10,
    padding: 5,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  return (
    <div>
        <ListGroup>
          <Link to={`/blogs/${props.blog.id}`}>
            <ListGroup.Item>
              {props.blog.title}, by: {props.blog.author}
            </ListGroup.Item>
          </Link>
        </ListGroup>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { data: state }
}

const mapDispatchToProps = {
  likeBlog,
  deleteBlog,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
