const Product = require("../models/Product");
const {
  createProductService,
  getProductService,
  updateProductService,
  bulkUpdateService,
} = require("../services/product.service");

exports.getProducts = async (req, res, next) => {
  try {
    // const products = await Product.find({});
    // const products = await Product.where("name")
    //   .equals("cha")
    //   .where("quantity")
    //   .gt(100);

    const products = await getProductService();
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can' t get the data",
      error: error.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  console.log(req.body);

  try {
    // data posting using save or create

    // using create
    const result = await createProductService(req.body);
    result.logger();
    // using save
    // const product = new Product(req.body);
    // if (product.quantity == 0) {
    //   product.status = "out-of-stock";
    // }

    // const result = await product.save();

    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req.body);

    res.status(200).json({
      status: "success",
      message: "Data updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not updated",
      error: error.message,
    });
  }
};

exports.bulkUpdateProduct = async (res, req, next) => {
  try {
    console.log(req.body);
    const result = await bulkUpdateService(req.body);

    res.status(200).json({
      stauts: "success",
      message: "Successfully updated the product",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't update the product",
      error: error.message,
    });
  }
};
