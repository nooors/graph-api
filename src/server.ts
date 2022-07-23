import express from "express";
import compression from "compression";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema/index";
import { createServer } from "http";

const app = express();

app.use(cors());

app.use(compression());
// grahql section
// app.use(
//   "/",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

const server = new ApolloServer({
  schema,
  introspection: true,
});

const PORT = 5300;

server.start().then((res) => {
  server.applyMiddleware({ app });
  app.listen({ port: PORT }, () =>
    console.log(`Hello World from API GraphQL http://localhost:${PORT}/graphql`)
  );
});
