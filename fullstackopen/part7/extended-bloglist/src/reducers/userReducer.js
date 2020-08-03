const userReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_USERS':
      return action.data
    default:
      return state
  }
}

export default userReducer