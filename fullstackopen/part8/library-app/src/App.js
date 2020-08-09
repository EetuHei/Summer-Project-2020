import React, { useState } from 'react'
import { useQuery, useApolloClient } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import LoginForm from './components/LoginForm'
import { ALL_BOOKS } from './service/queries'

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null
  }

  return <div style={{ color: 'red' }}>{errorMessage}</div>
}

const App = () => {
  const [page, setPage] = useState('authors')
  const [errorMessage, setErrorMessage] = useState(null)
  const [token, setToken] = useState(null)
  const client = useApolloClient()

  const result = useQuery(ALL_BOOKS, {
    pollInterval: 2000,
  })

  if (result.loading) {
    return <div>loading...</div>
  }

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
  }

  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
        {!token ? (
          <button onClick={() => setPage('login')}>login</button>
        ) : (
          <button onClick={logout}>logout</button>
        )}
      </div>
      <Notify errorMessage={errorMessage} />
      <Authors
        setError={notify}
        show={page === 'authors'}
        authors={result.data.allBooks.map((book) => book.author)}
      />
      <Books show={page === 'books'} books={result.data.allBooks} />
      <NewBook show={page === 'add'} setError={notify} />
      {!token && page === 'login' ? (
        <LoginForm
          show={page === ' login'}
          setError={notify}
          setToken={setToken}
        />
      ) : (
        ""
      )}
    </div>
  )
}

export default App
