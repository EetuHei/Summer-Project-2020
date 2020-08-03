import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { likeBlog } from '../reducers/Actions'

const BlogView = (props) => {
  const blog = props.blogData.filter(
    (blog) => blog.id === props.match.params.id
  )

  if (blog.length !== 1) {
    return <Redirect to='/' />
  }

  const handleLike = (e) => {
    e.preventDefault()
    let blogs = { ...blog[0] }
    if (!blogs.user) {
      blogs.user = null
      props.likeBlog(blogs)
    } else {
      blogs.user = blogs.user.id
      props.likeBlog(blogs)
    }
  }

  return (
    <div>
      <h1>{blog[0].title}</h1>
      <a href='localhost:3000'>{blog[0].url}</a>
      <p>
        likes: {blog[0].likes}{' '}
        <button type='button' onClick={(e) => handleLike(e)}>
          like
        </button>
      </p>
      <p>added by: {blog[0].user.name}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { blogData: state.blogs }
}

const mapDispatchToProps = {
  likeBlog,
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogView)
