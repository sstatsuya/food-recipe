const express = require("express"); // import thư viện express đã cài ở trên
const app = express(); // app ở đây đại diện cho cái dự án nodejs mà mình sẽ làm việc xuyên suốt
const port = 3000; // muốn run app ở port 3000

const database = require("./config/database");
database.connect();

const BodyParser = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use("/", require("./route"));

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const { ApolloServer } = require("apollo-server-express");

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = express();

  server.applyMiddleware({
    app,
    path: "/",
  });
  const PORT = process.env.PORT || 3000;
  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  app.get("/hello", (req, res) => {
    // tạo tuyến đường, khi gõ địa chỉ + '/hello' thì nó sẽ trả về chuỗi 'Hello World!'
    res.send("Hello World!");
  });

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}
startApolloServer(typeDefs, resolvers);
