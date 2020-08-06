import { gql } from '@apollo/client'

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      published
      genres
      author {
        name
        born
        id
        bookCount
      }
      id
    }
  }
`
