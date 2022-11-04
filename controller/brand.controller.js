const {
  createBrandService,
  getBrandService,
  getBrandServiceById,
} = require("../services/brand.service");

exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);
    console.log(result);
    res.status(200).json({
      status: "success",
      message: "Succesfully inserted data",
    });
  } catch (error) {
    res.status(400).json({
      status: "fails",
      error: "Could not create brand",
    });
  }
};

exports.getBrand = async (req, res, next) => {
  try {
    const brands = await getBrandService();
    res.status(200).json({
      status: "success",
      message: "Succesfully get brands",
      data: brands,
    });
  } catch (error) {
    res.status(400).json({
      status: "fails",
      error: "could not get data",
    });
  }
};

exports.getBrandById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await getBrandServiceById(id);
    if (!brand) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find a brand with this id",
      });
    }

    res.status(200).json({
      status: "success",
      data: brand,
    });
  } catch (error) {
    res.status(400).json({
      status: "fails",
      error: " could not get data",
    });
  }
};
