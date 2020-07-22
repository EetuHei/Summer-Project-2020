export const setVote = (id) => ({
  type: 'VOTE',
  data: { id: id },
})

export const addNew = (inputValue) => ({
  type: 'ADD',
  data: inputValue,
})

export const initNotification = (inputValue) => ({
  type: 'SET_NOTIFICATION',
  data: inputValue,
})

export const resetNotification = () => ({
  type: 'RESET_NOTIFICATION',
})

export const initAnecdotes = (anecdotes) => ({
  type: 'INIT_ANECDOTES',
  data: anecdotes
})