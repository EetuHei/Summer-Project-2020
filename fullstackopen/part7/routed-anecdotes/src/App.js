import React, { useState } from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import AnecdoteList from './components/AnecodteList'
import CreateNew from './components/AnecdoteForm'
import Anecdote from './components/Anecdote'
import About from './components/About'
import Footer from './components/Footer'

const Menu = () => {
  const padding = {
    paddingRight: 5,
  }
  return (
    <div>
      <Link style={padding} to='/'>
        home
      </Link>
      <Link style={padding} to='/create'>
        create new
      </Link>
      <Link style={padding} to='/about'>
        about
      </Link>
    </div>
  )
}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1',
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2',
    },
  ])

  const [notification, setNotification] = useState('')

  const match = useRouteMatch('/anecdote/:id')
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === match.params.id)
    : null

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))

    setNotification(`a new anecdote ${anecdote.content} created!`)
    setTimeout(() => {
      setNotification('')
    }, 10000)
  }

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  }

  return (
    <div>
      {}
      <h1>Software anecdotes</h1>
      <Menu />
      <h3>{notification}</h3>
      <Switch>
        <Route
          path='/'
          exact
          render={() => (
            <AnecdoteList notification={notification} anecdotes={anecdotes} />
          )}
        />
        <Route
          path='/anecdote/:id'
          exact
          render={() => <Anecdote anecdote={anecdote} />}
        />
        <Route
          path='/create'
          exact
          render={() => <CreateNew addNew={addNew} />}
        />
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
