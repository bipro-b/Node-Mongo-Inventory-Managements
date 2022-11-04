const Brand = require("../models/Brand");

exports.createBrandService = async (data) => {
  const result = await Brand.create(data);
  return result;
};

exports.getBrandService = async () => {
  const brands = await Brand.find({});
  return brands;
};

exports.getBrandServiceById = async (id) => {
  const brand = await Brand.findOne({ _id: id });
  return brand;
};
