const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    exchangeRate(countryCode: String!): Float!
  }
`;
module.exports = typeDefs;
