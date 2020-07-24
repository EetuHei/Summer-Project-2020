import React from 'react'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { setVote, initNotification } from '../reducers/Actions'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes
  const filter = props.filter
  const dispatch = useDispatch()

  const vote = (id) => {
    const findAnecdote = anecdotes.find((a) => a.id === id)
    props.setVote(findAnecdote)
    props.initNotification(`you voted '${findAnecdote.content}'`, 5)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const mapDispatchToProps = {
  setVote,
  initNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
