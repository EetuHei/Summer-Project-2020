const blogReducer = (state = [], action) => {
  console.log('blogReducer state now: ', state)
  console.log('blogReducer action', action)

  switch (action.type) {
    case 'INIT_BLOGS':
      return action.data
    case 'ADD_BLOG':
      return [...state, action.data]

    case 'LIKE_BLOG':
      const blogId = action.data.id
      const blogToUpdate = state.find((a) => a.id === blogId)
      console.log(blogToUpdate, 'finding the right blog to update')
      const updateBlog = {
        ...blogToUpdate,
        likes: blogToUpdate.likes + 1,
      }
      return state.map((blog) => (blog.id !== blogId ? blog : updateBlog))

    case 'DELETE_BLOG':
      const id = action.data.id
      return state.filter((blog) => blog.id !== id)
    default:
      return state
  }
}

export default blogReducer
