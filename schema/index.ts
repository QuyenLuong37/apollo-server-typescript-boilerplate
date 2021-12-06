import { gql } from "apollo-server";
import { booksSchema } from "./books.schema";
import { todosSchema } from "./todos.schema";

export const typeDefs = gql`
  ${booksSchema}
  ${todosSchema}
`;