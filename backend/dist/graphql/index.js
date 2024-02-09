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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createApolloGraphqlServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new ApolloServer({
            typeDefs: `
          type Query {
            hello: String
            say(name: String): String
          }
    
          type Mutation {
            createUser(name: String!, email: String!, password: String!): Boolean!
          }
        `,
            resolvers: {
                Query: {
                    hello: () => 'Hello graphql!',
                    say: (_, { name }) => `Hey ${name}, How are you?`,
                },
                Mutation: {
                    createUser: (_, { name, email, password }) => __awaiter(this, void 0, void 0, function* () {
                        yield prisma.user.create({
                            data: {
                                email,
                                name,
                                hashedPassword: password,
                                // salt: "random_salt",
                            },
                        });
                        return true;
                    }),
                },
            },
        });
        yield server.start();
    });
}
