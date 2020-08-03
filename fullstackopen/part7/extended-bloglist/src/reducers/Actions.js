import AuthServices from '../services/auth'
import blogServices from '../services/blogs'
import userServices from '../services/user'

export const loginUser = (username, password) => {
  return async (dispatch) => {
    const user = await AuthServices.login({ username, password })
    if (user.data && user.data.error) {
      return user
    } else {
      await dispatch({
        type: 'LOGIN',
        data: user,
      })
    }
  }
}

export const logoutUser = () => {
  window.localStorage.clear()
  return {
    type: 'LOGOUT',
  }
}

let timer
export const setAlert = (message, time, color) => {
  return async (dispatch) => {
    await dispatch({
      type: 'SET_ALERT',
      data: message,
      color: color,
    })
    clearTimeout(timer)
    timer = setTimeout(() => {
      dispatch({
        type: 'RESET_ALERT',
      })
    }, time * 1000)
  }
}

export const initBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogServices.getAll()
    await dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export const addBlog = (title, author, url) => {
  return async (dispatch) => {
    const submitBlog = await blogServices.addNew({ title, author, url })
    if (submitBlog.data && submitBlog.data.error) {
      return submitBlog
    } else {
      await dispatch({
        type: 'ADD_BLOG',
        data: submitBlog,
      })
      return submitBlog
    }
  }
}

export const likeBlog = (blog) => {
  return async (dispatch) => {
    const res = await blogServices.updateById(blog)
    await dispatch({
      type: 'LIKE_BLOG',
      data: { id: res.id },
    })
  }
}

export const deleteBlog = (id) => {
  return async (dispatch) => {
    await blogServices.deleteById(id)
    dispatch({
      type: 'DELETE_BLOG',
      data: id,
    })
  }
}

export const initUsers = () => {
  return async (dispatch) => {
    const users = await userServices.getAll()
    dispatch({
      type: 'INIT_USERS',
      data: users,
    })
  }
}
