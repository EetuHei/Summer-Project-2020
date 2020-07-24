import anecdoteServices from '../services/anecdoteServices'

// fetch anecdotes from db
export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

// add new anecdote
export const addNew = (inputValue) => {
  return async (dispatch) => {
    const res = await anecdoteServices.createNew(inputValue)
    dispatch({
      type: 'ADD',
      data: res,
    })
  }
}

// vote anecdote
export const setVote = (dataObj) => {
  return async (dispatch) => {
    const res = await anecdoteServices.updateById(dataObj)
    dispatch({
      type: 'VOTE',
      data: { id: res.id },
    })
  }
}

// show notification & reset notification
let timer
export const initNotification = (message, time) => {
  return async (dispatch) => {
    await dispatch({
      type: 'SET_NOTIFICATION',
      data: message,
    })
    clearTimeout(timer)
    timer = setTimeout(() => {
      dispatch({
        type: 'RESET_NOTIFICATION',
      })
    }, time * 1000)
  }
}

// filter anecdotes
export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}

// reset filtering
export const resetFilter = () => {
  return {
    type: 'RESET_FILTER',
  }
}
