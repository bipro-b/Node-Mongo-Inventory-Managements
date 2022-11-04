const Store = require("../models/Store");

exports.createStoreService = async (data) => {
  const reuslt = await Store.create(data);
  return reuslt;
};

exports.getStoreService = async () => {
  const stores = await Store.find({});
  return stores;
};

exports.getStoreServiceById = async (id) => {
  const store = await Store.findOne({ _id: id });
  return store;
};
