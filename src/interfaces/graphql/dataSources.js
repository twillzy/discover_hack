const { GetExchangeRate } = require("../../app/exchange-rate");

module.exports = () => ({
  exchangeRate: new GetExchangeRate()
});
