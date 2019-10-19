const exchangeRate = require("./exchange-rate");
const convertCurrency = require("./convert-currency");
const offers = require("./get-offers");

module.exports = {
  Query: {
    exchangeRate,
    convertCurrency,
    offers
  }
};
