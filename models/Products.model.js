const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  brand: String,
  name: String,
  weight: String,
  price: Number,
  mrp: Number,
  ImgSrc: String,
  category: String,
  sasta: String,
  packet: String,
  offers: String
});

const ProductModel = mongoose.model("products", productsSchema);

module.exports = {
  ProductModel
};