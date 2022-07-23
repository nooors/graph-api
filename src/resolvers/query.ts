import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
  Query: {
    hello(): string {
      return "Hola Mundo!";
    },
    helloWithName(__: void, { name }): string {
      return `Hello World ${name}`;
    },
    helloToGraphQLCourse(): string {
      return "Hello to the GraphQL course";
    },
  },
};

export default query;
