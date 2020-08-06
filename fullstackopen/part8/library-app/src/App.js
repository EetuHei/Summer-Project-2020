import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { ALL_BOOKS } from './service/queries'

const App = () => {
  const [page, setPage] = useState('authors')

  const result = useQuery(ALL_BOOKS, {
    pollInterval: 2000,
  })

  if (result.loading) {
    return <div>loading...</div>
  }

  console.log('response from apollo server: ', result.data.allBooks)

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors
        show={page === 'authors'}
        authors={result.data.allBooks.map((book) => book.author)}
      />

      <Books show={page === 'books'} books={result.data.allBooks} />

      <NewBook show={page === 'add'} />
    </div>
  )
}

export default App