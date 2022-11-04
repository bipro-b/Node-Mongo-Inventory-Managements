const {
  createStockService,
  getStockService,
  getStockByIdService,
} = require("../services/stock.service");

exports.createStock = async (req, res, next) => {
  try {
    const result = await createStockService(req.body);

    res.status(200).json({
      status: "Success",
      message: "Successfully created stock",
    });
  } catch (error) {
    res.status(400).json({
      status: "Fails",
      message: "Could not created stock",
      error: error.message,
    });
  }
};

exports.getSctock = async (req, res, next) => {
  try {
    const stocks = await getStockService();
    res.status(200).json({
      status: "Success",
      message: "Successfully get Stocks data",
      data: stocks,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fails",
      message: "Could get stock data",
      error: error.message,
    });
  }
};

exports.getStockById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const stock = await getStockByIdService(id);
    if (!stock) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find a stock with this id",
      });
    }

    res.status(200).json({
      status: "success",
      data: stock,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fails",
      message: "Could get stock data",
      error: error.message,
    });
  }
};
