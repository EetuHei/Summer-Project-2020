import React, { useState } from 'react'
import blogServices from '../services/blogs'
import { connect } from 'react-redux'
import { likeBlog, deleteBlog } from '../reducers/Actions'
import { Link } from 'react-router-dom'

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
    <div style={blogStyle}>
      <div id='container'>
        <Link to={`/blogs/${props.blog.id}`}>
          {props.blog.title}, by: {props.blog.author}
        </Link>
      </div>
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
