import React from 'react'
import BirthyearForm from './BirthyearForm'

const Authors = (props) => {
  if (!props.show) {
    return null
  }

  // remove duplicated authors from authors array
  const removeDup = props.authors.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  )

  const authors = [...removeDup]

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BirthyearForm />
    </div>
  )
}

export default Authors
