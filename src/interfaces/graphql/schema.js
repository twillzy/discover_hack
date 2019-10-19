const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    exchangeRate(countryCode: String!): Float!
    convertCurrency(from: String!, to: String!, amount: Float!): Float!
  }
`;
module.exports = typeDefs;
