const express = require("express");
const brandController = require("../controller/brand.controller");
const router = express.Router();

router
  .route("/")
  .post(brandController.createBrand)
  .get(brandController.getBrand);

router.route("/:id").get(brandController.getBrandById);

module.exports = router;
