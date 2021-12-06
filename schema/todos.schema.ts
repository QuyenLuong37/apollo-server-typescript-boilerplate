import { gql } from "apollo-server-core";


export const todosSchema = gql`
    type Todo {
      userId: Int
      id: Int
      title: String
      completed: Boolean
  }

  type Query {
    todos: [Todo]
  }
`