const Product = require("../models/Product");

exports.getProductService = async () => {
  const products = await Product.find({});
  return products;
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};
exports.updateProductService = async (productId, data) => {
  const result = await Product.updateOne(
    { _id: productId },
    { $set: data },
    { runValidators: true }
  );
};

exports.bulkUpdateService = async (data) => {
  // const result = await Product.updateMany({ _id: datta.ids },data.data);
  const products = [];
  data.ids.forEach((product) => {
    products.push(Product.updateOne({ _id: data.id }, product.data));
  });

  const result = await promise.all(products);
  return result;
};

exports.deleteProductByIdService = async (id) => {
  const deleteProduct = await Product.deleteOne({ _id: id });
  return deleteProduct;
};

exports.bulkDeleteProductService = async (ids) => {
  const result = await Product.deleteMany({ _id: ids });
  return result;
};
