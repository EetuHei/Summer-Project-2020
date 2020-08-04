import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { likeBlog, deleteBlog } from '../reducers/Actions'
import Comments from './Comments'
import CommentForm from './CommentForm'
import { Button } from 'react-bootstrap'

const BlogView = (props) => {
  const blog = props.blogData.filter(
    (blog) => blog.id === props.match.params.id
  )

  if (blog.length !== 1) {
    return <Redirect to='/' />
  }

  const handleDelete = (e, blog) => {
    e.preventDefault()
    const res = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)

    if (res) {
      props.deleteBlog(blog)
    }
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
      <a
        href='localhost:3000'
        style={{
          color: 'inherit',
          marginRight: '5px',
          textDecoration: 'underline',
        }}
      >
        {blog[0].url}
      </a>
      <p>
        likes: {blog[0].likes}{' '}
        <Button
          size='md'
          variant='outline-secondary'
          type='button'
          onClick={(e) => handleLike(e)}
        >
          like
        </Button>
      </p>
      <p>added by: {blog[0].user.name}</p>
      {blog[0].user.name === props.userData.name ? (
        <Button
          size='md'
          variant='outline-secondary'
          type='button'
          id='deleteBtn'
          onClick={(e) => handleDelete(e, blog[0])}
        >
          delete
        </Button>
      ) : (
        ''
      )}
      <h2>comments</h2>
      <CommentForm id={props.match.params.id} />
      {blog[0].comments.map((comment) => (
        <Comments key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { blogData: state.blogs, userData: state.auth }
}

const mapDispatchToProps = {
  likeBlog,
  deleteBlog,
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogView)
