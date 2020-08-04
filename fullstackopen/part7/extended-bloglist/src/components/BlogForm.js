import React from 'react'
import { connect } from 'react-redux'
import { useField } from '../hooks/useField'
import { addBlog, setAlert } from '../reducers/Actions'
import { Button, Form } from 'react-bootstrap'

const BlogForm = (props) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const handleBlogSubmit = async (e) => {
    e.preventDefault()
    const res = await props.addBlog(title.value, author.value, url.value)
    if (!res || res.status === 400) {
      props.setAlert(res.data.error, 5, 'red')
    } else if (res.status === 500) {
      props.setAlert(res.data.error)
    } else if (res) {
      props.setAlert(res, 5, 'green')
    }
  }

  if (props.userData.token) {
    return (
      <Form onSubmit={handleBlogSubmit}>
        <h2>Create new</h2>
        <Form.Label>title</Form.Label>
        <Form.Control type='text' id='title' {...title} />
        <Form.Label>author</Form.Label>
        <Form.Control type='text' id='author' value={author} {...author} />
        <Form.Label>url</Form.Label>
        <Form.Control type='text' id='url' {...url} />
        <Button size='md' variant='outline-secondary' id='submit' type='submit'>
          create
        </Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return { userData: state.auth }
}

const mapDispatchToProps = {
  addBlog,
  setAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm)
