import React, { useState, useEffect } from 'react'
import GenreFilter from './GenreFilter'

const Books = (props) => {
  const [books, setBooks] = useState(props.books)
  const [genre, setGenre] = useState('')

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
    setBooks(books.filter((book) => book.genres.includes(genre)))
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
