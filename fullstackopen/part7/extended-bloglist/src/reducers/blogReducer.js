const blogReducer = (state = [], action) => {
  console.log('blogReducer state now: ', state)
  console.log('blogReducer action', action)

  switch (action.type) {
    case 'INIT_BLOGS':
      return state.concat(action.data)
    default:
      return state
  }
}

export default blogReducer
