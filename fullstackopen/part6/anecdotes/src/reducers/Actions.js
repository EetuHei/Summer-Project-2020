export const setVote = (id) => ({
  type: 'VOTE',
  data: { id: id },
})

export const addNew = (inputValue) => ({
  type: 'ADD',
  data: inputValue,
})
