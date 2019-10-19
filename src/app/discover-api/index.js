const axios = require("axios");
const config = require("config");

const getExchangeRate = async countryCode => {
  const results = await axios.get(
    `https://api.discover.com/dci/currencyconversion/v1/exchangerate?currencycd=${countryCode}`,
    {
      headers: {
        "X-DFS-API-PLAN": "DCI_CURRENCYCONVERSION_SANDBOX",
        Authorization: `Bearer ${config.get("authorization")}`
      }
    }
  );
  return results.data;
};

module.exports = { getExchangeRate };
