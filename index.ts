import { ApolloServer, gql } from "apollo-server";
import { BooksAPI } from "./apis/books.api";
import { resolvers } from "./resolvers/resolvers";
import { typeDefs } from "./schema";
import * as dotenv from "dotenv";
import * as path from "path";
import { TodosAPI } from "./apis/todos.api";

dotenv.config({path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`)});
const server = new ApolloServer({ typeDefs, resolvers, dataSources: () => {
    return {
        booksAPI: new BooksAPI('https://jsonplaceholder.typicode.com'),
        todosAPI: new TodosAPI('https://jsonplaceholder.typicode.com')
    }
} });

// The `listen` method launches a web server.
server.listen(process.env.PORT).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});