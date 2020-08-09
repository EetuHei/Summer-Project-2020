require('dotenv').config()
const { ApolloServer, gql, UserInputError } = require('apollo-server')
const { v4: uuid } = require('uuid')
const mongoose = require('mongoose')
const Book = require('./src/models/book')
const Author = require('./src/models/author')

mongoose.set('useFindAndModify', false)
const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI)
console.log('connecting to', MONGODB_URI)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

const typeDefs = gql`
  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int!
  }

  type Book {
    title: String!
    published: Int!
    author: Author!
    id: ID!
    genres: [String!]!
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(name: String!, setBornTo: Int!): Author
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }
`

const resolvers = {
  Query: {
    bookCount: async () => await Book.collection.countDocuments(),
    authorCount: async () => await Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      if (!args.author && !args.genre)
        return await Book.find({}).populate('author')
      if (args.author && !args.genre) {
        const authorId = await Author.findOne({ name: args.author })
        return await Book.find({ author: authorId._id }).populate('author')
      }
      if (args.genre && !args.author)
        return await Book.find({ genres: args.genre }).populate('author')
      if (args.author && args.genre)
        return await Book.find({
          author: args.author,
          genres: args.genre,
        }).populate('author')
    },
    allAuthors: async () => await Author.find({}),
  },

  Author: {
    bookCount: async (authors) => {
      const authorBooks = await Book.find({ author: authors._id })
      if (authorBooks.length === 0) {
        const asd = await await Book.find({ author: authors.id })
        return asd.length
      }
      return authorBooks.length
    },
  },

  Book: {
    author: async (root) => {
      const filterAuthors = await Author.find({ name: root.author.name })
      return {
        name: root.author.name,
        born: filterAuthors[0].born || null,
        id: root.author._id,
      }
    },
  },

  Mutation: {
    addBook: async (root, args) => {
      let author = await Author.findOne({ name: args.author })

      if (!author) {
        author = new Author({ name: args.author })
        try {
          await author.save()
        } catch (e) {
          throw new UserInputError(e.message, {
            invalidArgs: args,
          })
        }
      }
      const book = new Book({
        title: args.title,
        published: args.published,
        author: author._id,
        genres: args.genres,
      })

      try {
        await book.save()
        return book.populate('author').execPopulate()
      } catch (e) {
        throw new UserInputError(e.message, {
          invalidArgs: args,
        })
      }
    },
    editAuthor: async (root, args) => {
      const author = await Author.findOne({ name: args.name })

      if (!author) return null
      author.born = args.setBornTo

      try {
        await author.save()
        return author
      } catch (e) {
        throw new UserInputError(e.message, {
          invalidArgs: args,
        })
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
