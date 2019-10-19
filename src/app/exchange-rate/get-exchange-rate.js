const { getExchangeRate } = require("../discover-api");

class GetExchangeRate {
  async execute({ countryCode }) {
    const { exchange_rate: exchangeRate } = await getExchangeRate(countryCode);
    return exchangeRate;
  }
}

module.exports = GetExchangeRate;
