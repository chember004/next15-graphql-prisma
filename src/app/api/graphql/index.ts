import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../../../prisma/db";
import { resolvers } from "../../../../graphql/resolver";
import { typeDefs } from "../../../../graphql/schema";
// import { gql } from "graphql-tag";

export type Context = {
  prisma: PrismaClient;
};

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

export const graphqlHandler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
