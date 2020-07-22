const initialState = {
  data: '',
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return { ...state, data: action.data }

    case 'RESET_NOTIFICATION':
      return initialState

    default:
      return state
  }
}

export default notificationReducer
