const { ApolloServer, gql } = require('@apollo/server');
const express = require("express");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");

async function startServer() {
  const app = express();
  const typeDefs = `
    type Todo {
      id: ID!
      title: String!
    }

    type Query {
      todos: [Todo!]!
    }
  `;

  const resolvers = {
    Query: {
      todos: () => {
        // Return some mock todos
        return [
          { id: "1", title: "Learn GraphQL" },
          { id: "2", title: "Build a GraphQL server" },
        ];
      },
    },
  };

  const server = new ApolloServer({
    typeDefs:`
    
    type Todo {
      id: ID!
      title: String!
    }

    type Query {
      getTodos: [Todo]
    }
    `,
    resolvers:{},
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use('/graphql', expressMiddleware(server));

  app.listen(8000, () => console.log('Server started at port 8000'));
}

startServer();
