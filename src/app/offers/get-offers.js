const { getOffers } = require("../discover-api");

class GetOffers {
  async execute({ lat, long }) {
    const offers = await getOffers(lat, long);
    return offers;
  }
}

module.exports = GetOffers;
