module.exports = (_source, args, context) => {
  return context.dataSources.exchangeRate.execute(args, context);
};
