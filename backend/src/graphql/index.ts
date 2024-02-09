const { ApolloServer, gql } = require('@apollo/server');
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createApolloGraphqlServer(){

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
            say: (_:any, { name }: { name: string }) => `Hey ${name}, How are you?`,
          },
          Mutation: {
            createUser: async (_:any, { name, email, password }: { name: string; email: string; password: string }) => {
              await prisma.user.create({
                data: {
                  email,
                  name,
                  hashedPassword: password,
                  // salt: "random_salt",
                },
              });
              return true;
            },
          },
        },
      });

      await server.start();
}