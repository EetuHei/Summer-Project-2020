import React, { useState } from 'react'
import blogServices from '../services/blogs'
import { connect } from 'react-redux'
import { deleteBlog } from '../reducers/Actions'

const Blog = (props) => {
  const [details, setDetails] = useState(false)
  const [likes, setLikes] = useState(props.blog.likes)

  const buttonText = () => (details === true ? 'hide' : 'view')

  const handleLike = (e) => {
    e.preventDefault()
    let blogs = { ...props.blog }
    if (!blogs.user) {
      blogs.user = null
      blogs.likes = likes + 1
      setLikes(likes + 1)
      blogServices.updateById(blogs)
    } else {
      blogs.user = blogs.user.id
      blogs.likes = likes + 1
      setLikes(likes + 1)
      blogServices.updateById(blogs)
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

  // onClick={(e) => handleDelete(e, blog)}

  return (
    <div style={blogStyle}>
      <div id='container'>
        {props.blog.title}, by: {props.blog.author}
        <button
          style={{ marginLeft: '5px' }}
          id='view'
          className='viewBtn'
          onClick={() => setDetails(!details)}
        >
          {buttonText()}
        </button>
      </div>
      {details ? (
        <div className='allDetails'>
          <div>
            <a href='localhost:3000'>{props.blog.url}</a>
            <div className='likes'>
              likes:{likes}
              <button type='button' onClick={(e) => handleLike(e)}>
                like
              </button>
              {!props.blog.user ? '' : <div>{props.blog.user.name}</div>}
              {!props.blog.user ? (
                ''
              ) : props.data.auth.name === props.blog.user.name ? (
                <button type='button' id='deleteBtn'>
                  delete
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { data: state }
}

const mapDispatchToProps = {
  deleteBlog,
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
