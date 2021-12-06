const books = process.env.NODE_ENV === 'dev' ? [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
    {
        title: 'test1',
        author: 'Thao the',
    },
    {
        title: 'test2',
        author: 'Thao the 2',
    },
] : [{
    title: 'Hello world',
    author: 'Quyen Luong',
}];

export const resolvers = {
    Query: {
        books: async (_source, _args, { dataSources }) => {
            const books = await dataSources.booksAPI.getBooks();
            return books;
        },
        todos: async (_source, _args, { dataSources }) => {
            const books = await dataSources.todosAPI.getTodos();
            return books;
        },
    },
    Mutation: {
        createBook: (_source, _arg, c) => {
            books.concat(_arg);
            return _arg;
        }
    }
};