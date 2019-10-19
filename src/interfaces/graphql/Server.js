const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

class Server {
  constructor({ dataSources } = {}) {
    this.apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources,
      engine: false
    });
  }

  start() {
    return new Promise(resolve => {
      this.apolloServer.listen().then(({ url }) => {
        console.log(`🚀Server ready at ${url}`);
        resolve();
      });
    });
  }

  stop() {
    return this.httpServer.close();
  }
}

module.exports = Server;
