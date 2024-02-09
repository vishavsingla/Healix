"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer, gql } = require('@apollo/server');
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
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
            typeDefs: `
    
    type Todo {
      id: ID!
      title: String!
    }

    type Query {
      getTodos: [Todo]
    }
    `,
            resolvers: {},
        });
        app.use(bodyParser.json());
        app.use(cors());
        yield server.start();
        app.use('/graphql', expressMiddleware(server));
        app.listen(8000, () => console.log('Server started at port 8000'));
    });
}
app.get("/", (req, res) => {
    res.json({ message: "Hi from server" });
});
startServer();
