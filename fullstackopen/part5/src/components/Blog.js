import React, { useState } from 'react'
import blogServices from '../services/blogs'

const Blog = ({ blog }) => {
  const [details, setDetails] = useState(false)
  const [likes, setLikes] = useState(blog.likes)
  
  const buttonText = () => (details === true ? 'hide' : 'view')
  const allDetails = { display: details ? '' : 'none' }

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
    <div>
      <div style={blogStyle}>
        {blog.title}, by: {blog.author}
        <button
          style={{ marginLeft: '5px' }}
          id="view"
          onClick={() => setDetails(!details)}
        >
          {buttonText()}
        </button>
        <div style={allDetails} className="allDetails">
          <div>
            <a href="localhost:3000">{blog.url}</a>
            <div>
              likes:{likes}
              <button type="button" onClick={(e) => handleLike(e)}>
                like
              </button>
              {!blog.user ? '' : <div>{blog.user.name}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
