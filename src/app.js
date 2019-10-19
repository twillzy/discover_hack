const Application = require("./app/Application");
const Server = require("./interfaces/graphql/Server");
const dataSources = require("./interfaces/graphql/dataSources");

const server = new Server({ dataSources });
const app = new Application({ server });

app.start().catch(error => {
  console.log(error);
  process.exit();
});
