import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setVote,
  initNotification,
  resetNotification,
} from '../reducers/Actions'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(setVote(id))
    const findAnecdote = anecdotes.find((a) => a.id === id)
    dispatch(initNotification(findAnecdote))
    setTimeout(() => {
      dispatch(resetNotification())
    }, 5000)
  }

  let sortedAnecdotes = [...anecdotes]
  sortedAnecdotes.sort((a, b) => b.votes - a.votes)

  const filteredAnecdotes = sortedAnecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
