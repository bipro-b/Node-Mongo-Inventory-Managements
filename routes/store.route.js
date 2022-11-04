const express = require("express");
const storeController = require("../controller/store.controller");
const router = express.Router();

router
  .route("/")
  .post(storeController.createStore)
  .get(storeController.getStore);

router.route("/:id").get(storeController.getStoreById);

module.exports = router;
