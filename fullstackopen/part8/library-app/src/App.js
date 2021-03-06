import React, { useState, useEffect } from 'react'
import {
  useQuery,
  useMutation,
  useSubscription,
  useApolloClient,
} from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import LoginForm from './components/LoginForm'
import { ALL_BOOKS, GET_USER, BOOK_ADDED } from './service/queries'
import RecommendedBooks from './components/RecommendedBooks'

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
  const [user, setUser] = useState(null)
  const client = useApolloClient()

  const userData = useQuery(GET_USER)
  const result = useQuery(ALL_BOOKS, {
    pollInterval: 2000,
  })

  const updateCacheWith = (addedBook) => {
    const includedIn = (set, object) => set.map((p) => p.id).includes(object.id)

    const dataInStore = client.readQuery({ query: ALL_BOOKS })
    if (!includedIn(dataInStore.allBooks, addedBook)) {
      client.writeQuery({
        query: ALL_BOOKS,
        data: { allBooks: dataInStore.allBooks.concat(addedBook) },
      })
    }
  }

  useSubscription(BOOK_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      console.log(subscriptionData)
      const addedBook = subscriptionData.data.bookAdded
      notify(`Book with title: ${addedBook.title} was added`)
      updateCacheWith(addedBook)
    },
  })

  useEffect(() => {
    setToken(localStorage.getItem('user-token'))
    if (!userData.loading) setUser(userData.data.me)
  })

  if (result.loading) {
    return <div>loading...</div>
  }

  const logout = () => {
    setToken(null)
    setUser(null)
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

        {!token ? (
          <button onClick={() => setPage('login')}>login</button>
        ) : (
          <>
            <button onClick={() => setPage('add')}>add book</button>
            <button onClick={() => setPage('recommended')}>recommended</button>
            <button onClick={logout}>logout</button>
          </>
        )}
      </div>
      <Notify errorMessage={errorMessage} />
      <Authors
        token={token}
        setError={notify}
        show={page === 'authors'}
        authors={result.data.allBooks.map((book) => book.author)}
      />
      <Books show={page === 'books'} books={result.data.allBooks} />

      {!token && page === 'login' ? (
        <LoginForm
          setPage={setPage}
          show={page === ' login'}
          setError={notify}
          setToken={setToken}
        />
      ) : (
        <div>
          <NewBook show={page === 'add'} setError={notify} />
          <RecommendedBooks
            show={page === 'recommended'}
            books={result.data.allBooks}
            user={user}
          />
        </div>
      )}
    </div>
  )
}

export default App
