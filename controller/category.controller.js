const {
  createCategoryService,
  getCategoryService,
} = require("../services/category.service");

exports.createCategory = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body);
    res.status(200).json({
      status: "success",
      message: "successfully created category",
      data: result,
    });
  } catch {
    res.status(400).json({
      status: "Fails",
      message: "Could not created category",
      error: error.message,
    });
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const categories = await getCategoryService();
    res.status(200).json({
      status: "Success",
      message: "Successfully get category",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fails",
      message: "Fails to get Category",
      error: error.message,
    });
  }
};
