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

const getOffers = async (lat, long) => {
  const results = await axios.get(
    `https://api.discover.com/dci-offers/v2/offers?lat=${lat}&lng=${long}&radius=20&lang=en&sortdir=asc`,
    {
      headers: {
        "X-DFS-API-PLAN": "DCIOFFERS_SANDBOX",
        Authorization: `Bearer ${config.get("authorization")}`
      }
    }
  );
  return results.data.result;
};

module.exports = { getExchangeRate, getOffers };
