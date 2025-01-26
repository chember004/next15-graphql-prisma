import { Context } from "@/app/api/graphql";

//RESOLVERS are your functions which will be using for Create, Read, Update, & Delete
export const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    novels: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findMany();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    novel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Novel: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    authors: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.findMany({
        where: {
          novelId: parent.id,
        },
      });
      // return (await context.prisma.author.novelID) == parent.id;
    },
  },
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.create({
        data: {
          title: args.title,
          image: args.image,
        },
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.update({
        where: {
          id: args.id,
        },
        data: {
          title: args.title,
          image: args.image,
        },
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteNovel: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.delete({
        where: {
          id: args.id,
        },
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.create({
        data: {
          novelId: args.novelId,
          name: args.name,
        },
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteAuthor: async (parent: any, args: any, context: Context) => {
      return await context.prisma.author.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};
