import AuthServices from '../services/auth'

export const loginUser = (username, password) => {
  return async (dispatch) => {
    const user = await AuthServices.login({ username, password })

    if (user.data && user.data.error) {
      return user.data
    } else {
      dispatch({
        type: 'LOGIN',
        data: user,
      })
    }
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT',
  }
}
