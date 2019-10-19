module.exports = (_source, args, context) => {
  return context.dataSources.convertCurrency.execute(args, context);
};
