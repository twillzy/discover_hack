const GetExchangeRate = require("./get-exchange-rate");

class ConvertCurrency {
  constructor({ getExchangeRate = new GetExchangeRate() } = {}) {
    this.getExchangeRate = getExchangeRate;
  }

  async execute({ from, to, amount }) {
    const [fromExchange, toExchange] = await Promise.all([
      this.getExchangeRate.execute({ countryCode: from }),
      this.getExchangeRate.execute({ countryCode: to })
    ]);

    return (fromExchange / amount) * toExchange;
  }
}

module.exports = ConvertCurrency;
