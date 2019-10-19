const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    exchangeRate(countryCode: String!): Float!
    convertCurrency(from: String!, to: String!, amount: Float!): Float!
    offers(lat: Float!, long: Float!): [Offer!]!
  }

  type Offer {
    id: ID
    title: String
    name: String
    highlight: String
    details: String
  }
`;
module.exports = typeDefs;
