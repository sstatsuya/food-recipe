const express = require("express"); // import thư viện express đã cài ở trên

const database = require("./config/database");
database.connect();

const BodyParser = require("body-parser");

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const { ApolloServer } = require("apollo-server-express");

async function startServer(typeDefs, resolvers) {
  //Start REST
  const app = express();
  app.use("/", require("./route"));
  app.use(BodyParser.json());
  app.use(BodyParser.urlencoded({ extended: true }));
  
  //Start GRAPHQL
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  const PORT = process.env.PORT || 3000;
  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}
startServer(typeDefs, resolvers);
