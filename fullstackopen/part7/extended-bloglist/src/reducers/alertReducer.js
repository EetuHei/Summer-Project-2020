const initialState = {
  message: null,
  color: '',
}

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return { ...state, message: action.data, color: action.color }

    case 'RESET_ALERT':
      return initialState

    default:
      return state
  }
}

export default alertReducer
