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
const { ApolloServer } = require('@apollo/server');
// import { startStandaloneServer } from '@apollo/server/standalone';
const express = require("express");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        const server = new ApolloServer({
            typeDefs: `#graphql
      type Todo{
        id: ID!
        title: String!
      }
    `,
            resolvers: {}
        });
        app.use(bodyParser.json());
        app.use(cors());
        yield server.start();
        app.use('graphql', expressMiddleware(server));
        app.listen(8000, () => console.log('Server started at port 8000'));
    });
}
startServer();
// const typeDefs = `#graphql
//   type Book {
//     title: String
//     author: String
//   }
//   type Query {
//     books: [Book]
//   }
// `;
// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
// async function startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });
//   console.log(`🚀 Server ready at: ${url}`);
// }
// // Call the async function to start the server
// startApolloServer();
