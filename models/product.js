const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name:  String,
  category: String,
  price: Number,
  tags: [String]
}, { timestamps: true, versionKey: false })

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel
