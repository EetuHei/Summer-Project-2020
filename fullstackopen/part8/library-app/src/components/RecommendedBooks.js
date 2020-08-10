import React from 'react'

const RecommendedBooks = (props) => {
  console.log('props in recommendations: ', props)
  if (!props.show || !props.user) {
    return null
  }

  const books = [...props.books]
  const userFavorites = books.filter((book) =>
    book.genres.includes(props.user.favoriteGenre)
  )

  return (
    <div>
      <h2>recommended books</h2>
      <p>
        books in your favorite genre <strong>{props.user.favoriteGenre}</strong>
      </p>
      <table>
        <tbody>
          <tr>
            <th>book</th>
            <th>author</th>
            <th>published</th>
          </tr>
          {userFavorites.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default RecommendedBooks
