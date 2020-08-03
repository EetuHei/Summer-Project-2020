import React, { useState } from 'react'
import blogServices from '../services/blogs'
import { connect } from 'react-redux'
import { likeBlog, deleteBlog } from '../reducers/Actions'
import { Link } from 'react-router-dom'

const Blog = (props) => {
  const [details, setDetails] = useState(false)
  const likes = props.blog.likes
  const buttonText = () => (details === true ? 'hide' : 'view')

  const handleDelete = (e, blog) => {
    e.preventDefault()
    const res = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)

    if (res) {
      props.deleteBlog(blog)
    }
  }

  const handleLike = (e) => {
    e.preventDefault()
    let blogs = { ...props.blog }
    if (!blogs.user) {
      blogs.user = null
      blogs.likes = likes + 1
      props.likeBlog(blogs)
    } else {
      blogs.user = blogs.user.id
      blogs.likes = likes + 1
      props.likeBlog(blogs)
    }
  }

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
