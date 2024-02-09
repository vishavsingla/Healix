const { ApolloServer, gql } = require('@apollo/server');
const { expressMiddleware } = require("@apollo/server/express4");
import { Request, Response } from 'express';


const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();


async function startServer() {
  
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

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hi from server" });
});


startServer();
