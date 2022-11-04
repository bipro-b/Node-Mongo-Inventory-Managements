const express = require("express");
const categoryController = require("../controller/category.controller");
const router = express.Router();

router
  .route("/")
  .post(categoryController.createCategory)
  .get(categoryController.getCategory);

module.exports = router;
