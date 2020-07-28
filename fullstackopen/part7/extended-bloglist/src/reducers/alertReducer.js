const initialState = {
  message: '',
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, message: action.data }

    case 'RESET_NOTIFICATION':
      return initialState

    default:
      return state
  }
}
