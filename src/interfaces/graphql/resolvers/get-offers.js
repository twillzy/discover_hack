module.exports = (_source, args, context) => {
  return context.dataSources.offers.execute(args, context);
};
