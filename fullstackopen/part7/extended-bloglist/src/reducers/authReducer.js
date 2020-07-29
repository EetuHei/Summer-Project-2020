const config = JSON.parse(window.localStorage.getItem('userData'))

const initialState = config ? config : null

const authReducer = (state = initialState, action) => {
  console.log('authReducer state now: ', state)
  console.log('authReducer action', action)

  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export default authReducer
