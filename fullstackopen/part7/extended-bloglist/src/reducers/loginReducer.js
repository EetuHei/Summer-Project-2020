const config = window.localStorage.getItem('token')

const initialState = config ? config : null

const loginReducer = (state = initialState, action) => {
  console.log('loginReducer state now: ', state)
  console.log('loginReducer action', action)

  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export default loginReducer
