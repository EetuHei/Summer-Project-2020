import React from 'react'
import { useField } from '../hooks/useField'
import { addComment } from '../reducers/Actions'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'

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
    <Form onSubmit={handleCommentSubmit}>
      <Form.Control type='text' id='comment' {...comment} />
      <Button size='md' variant='outline-secondary' id='submit' type='submit'>
        add comment
      </Button>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return { blogData: state.blogs }
}

const mapDispatchToProps = {
  addComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
