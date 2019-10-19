const { GetExchangeRate, ConvertCurrency } = require("../../app/exchange-rate");

module.exports = () => ({
  exchangeRate: new GetExchangeRate(),
  convertCurrency: new ConvertCurrency()
});
