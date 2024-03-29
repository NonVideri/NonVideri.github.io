const mongoose = require('mongoose');

const productSchema = {
  name: {
    type: String,
    required: [true, 'Product name must be provided.']
  },
  price: {
    type: Number,
    required: [true, 'Product name must be provided.']
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported.'
    }
  }
};

const Product = mongoose.model('Product', new mongoose.Schema(productSchema));
module.exports = { Product, productSchema };
