const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// middle wares
app.use(express.json());
app.use(cors());

// routes
const productRoute = require("./routes/product.route");
const brandRoute = require("./routes/brand.route");
const storeRoute = require("./routes/store.route");
const categoryRoute = require("./routes/category.route");
const stoctRoute = require("./routes/stock.route");

app.use("/api/v1/product", productRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/stock", stoctRoute);
// DATA GET For query three method is available find, findOne, findByID
module.exports = app;

/* 

Few Query
const products = await Product.find({status: { $ne : "out-of-stock"}});
const products = await Product.find({name: { $in : ["ch","dal"]}});
const products = await Product.find({}, 'name quantity');
const products = await Product.find({}, '-name -quantity');
const products = await Product.find({}).limit(1);
const products = await Product.find({}).sort({quantity-1});
const products = await Product.find({}).select({name: 1})
const products = await Product.where("name").equals("ch").where("quantity").gt(100);
*/
