const express = require("express"); // import thư viện express đã cài ở trên
const app = express(); // app ở đây đại diện cho cái dự án nodejs mà mình sẽ làm việc xuyên suốt
const port = 3000; // muốn run app ở port 3000

const database = require("./config/database");
database.connect();

const BodyParser = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use("/", require("./route"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   // Cho app lắng nghe địa chỉ localhost (127.0.0.1) trên port 3000
//   console.log(`Example app listening on http://localhost:${PORT}`);
// });

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const { ApolloServer } = require("apollo-server-express");

async function startApolloServer(typeDefs, resolvers) {
  // Same ApolloServer initialization as before
  const server = new ApolloServer({ typeDefs, resolvers });
  // Required logic for integrating with Express
  await server.start();
  const app = express();

  server.applyMiddleware({
    app,
    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: "/",
  });
  // Modified server startup
  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(typeDefs, resolvers);

