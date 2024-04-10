// models/allProducts.js
const mongoose = require('mongoose');

const allProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  itemWeight: {
    type: Number,
    required: true,
  },
  images: [String],
});

const AllProducts = mongoose.model('AllProducts', allProductsSchema);

module.exports = AllProducts;
