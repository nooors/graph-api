import express from "express";
import compression from "compression";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/index";

const app = express();

app.use(cors());

app.use(compression());
// grahql section
app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 5300;

app.listen({ port: PORT }, () =>
  console.log(`Hello World from API GraphQL http://localhost:${PORT}/graphql`)
);
