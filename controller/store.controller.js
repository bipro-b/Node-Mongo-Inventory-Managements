const {
  createStoreService,
  getStoreService,
  getStoreServiceById,
} = require("../services/store.service");

exports.createStore = async (req, res) => {
  try {
    const result = await createStoreService(req.body);

    res.status(200).json({
      status: "success",
      messgae: "Store created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't create store",
      error: error.message,
    });
  }
};

exports.getStore = async (res, req, next) => {
  try {
    const stores = await getStoreService();
    console.log(stores);

    res.status(200).json({
      status: "success",
      data: stores,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the stores",
      error: error.message,
    });
  }
};

exports.getStoreById = async (res, req, next) => {
  try {
    const { id } = req.params;
    const store = await getStoreServiceById(id);
  } catch (error) {
    res.status(400).json({
      statrs: "fails",
      message: " Can'mt get store",
      error: error.message,
    });
  }
};
