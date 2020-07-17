import React, { useState } from 'react'
import blogServices from '../services/blogs'

const Blog = ({ blog, currentUser, handleDelete }) => {
  const [details, setDetails] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

  const buttonText = () => (details === true ? 'hide' : 'view')

  const handleLike = (e) => {
    e.preventDefault()
    let blogs = { ...blog }
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

  return (
    <div style={blogStyle}>
      <div id="container">
        {blog.title}, by: {blog.author}
        <button
          style={{ marginLeft: '5px' }}
          id='view'
          className="viewBtn"
          onClick={() => setDetails(!details)}
        >
          {buttonText()}
        </button>
      </div>
      {details ? (
        <div className='allDetails'>
          <div>
            <a href='localhost:3000'>{blog.url}</a>
            <div className="likes">
              likes:{likes}
              <button type='button' onClick={(e) => handleLike(e)}>
                like
              </button>
              {!blog.user ? '' : <div>{blog.user.name}</div>}
              {!blog.user ? (
                ''
              ) : currentUser.name === blog.user.name ? (
                <button type='button' id="deleteBtn" onClick={(e) => handleDelete(e, blog)}>
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

export default Blog
