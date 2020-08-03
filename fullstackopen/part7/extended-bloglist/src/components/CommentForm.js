import React from 'react'
import { useField } from '../hooks/useField'
import { addComment } from '../reducers/Actions'
import { connect } from 'react-redux'

const CommentForm = (props) => {
  const { reset: resetComment, ...comment } = useField('text')

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    const blogId = props.id
    await props.addComment(blogId, comment.value)
    resetField()
  }

  const resetField = () => {
    resetComment()
  }

  return (
    <form onSubmit={handleCommentSubmit}>
      <input type='text' id='comment' {...comment} />
      <button id='submit' type='submit'>
        add comment
      </button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return { blogData: state.blogs }
}

const mapDispatchToProps = {
  addComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
