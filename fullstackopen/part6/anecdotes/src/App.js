import React, { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initAnecdotes } from './reducers/Actions'
import { useDispatch } from 'react-redux'
import anecdoteServices from './services/anecdoteServices'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteServices
      .getAll()
      .then((anecdotes) => dispatch(initAnecdotes(anecdotes)))
  }, [dispatch])

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnecdoteList />
    </>
  )
}

export default App
