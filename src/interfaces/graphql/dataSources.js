const { GetExchangeRate, ConvertCurrency } = require("../../app/exchange-rate");
const { GetOffers } = require("../../app/offers");

module.exports = () => ({
  exchangeRate: new GetExchangeRate(),
  convertCurrency: new ConvertCurrency(),
  offers: new GetOffers()
});
