const Stock = require("../models/Stock");

exports.createStockService = async (data) => {
  const result = await Stock.create(data);
  return result;
};

exports.getStockService = async () => {
  const stocks = await Stock.find({});
  return stocks;
};

exports.getStockByIdService = async (id) => {
  const stock = await Stock.findById({ _id: id });
  return stock;
};
