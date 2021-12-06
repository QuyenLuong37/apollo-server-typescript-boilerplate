import { gql } from "apollo-server-core";


export const booksSchema = gql `
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
  type Mutation {
      createBook(title: String, author: String): Book
  }
`