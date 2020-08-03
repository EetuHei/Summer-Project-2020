import React from 'react'

const Comments = ({ comment }) => {

  return (
    <div key="comment">
      <li>{comment.comment}</li>
    </div>
  )
}

export default Comments
