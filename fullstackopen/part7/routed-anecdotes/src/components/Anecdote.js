import React from 'react'

const Anecdote = ({ anecdote }) => {
    console.log(anecdote, "in sinlge anecdote")
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>has {anecdote.votes}</p>
      <span>for more info see</span>
      <a href={anecdote.info}>{anecdote.info}</a>
    </div>
  )
}

export default Anecdote