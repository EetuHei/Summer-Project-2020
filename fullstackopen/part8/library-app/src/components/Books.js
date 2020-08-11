import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import GenreFilter from './GenreFilter'
import { GET_BOOKS_BY_GENRE } from '../service/queries'

const Books = (props) => {
  const [books, setBooks] = useState(props.books)
  const [genre, setGenre] = useState('')

  const [getBooks, result] = useLazyQuery(GET_BOOKS_BY_GENRE)

  useEffect(() => {
    if (!result.loading && result.data) {
      setBooks(result.data.allBooks)
    }
  }, [result])

  useEffect(() => {
    const genresArr = books.reduce((acc, book) => {
      return acc.concat(book.genres)
    }, [])

    // remove duplicated genres from combined genres array
    const removeDup = (arr) => {
      return arr.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      )
    }
    setGenre(removeDup(genresArr))
  }, [books])

  const filterByGenre = (genre) => {
    // setBooks(books.filter((book) => book.genres.includes(genre)))
    getBooks({ variables: { genre: genre } })
  }

  const clearGenreFilter = () => {
    setBooks([...props.books])
  }

  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <GenreFilter
        genres={genre}
        filterByGenre={filterByGenre}
        clear={clearGenreFilter}
      />
    </div>
  )
}

export default Books
