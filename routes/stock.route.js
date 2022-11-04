const express = require("express");
const stockController = require("../controller/stock.controller");
const router = express.Router();

router
  .route("/")
  .post(stockController.createStock)
  .get(stockController.getSctock);

router.route("/:id").get(stockController.getStockById);

module.exports = router;
