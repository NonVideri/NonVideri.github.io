const { Product, productSchema } = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const queryObject = {};
  for (prop in productSchema) {
    if (prop in req.query) {
      if (productSchema[prop].type === String)
        queryObject[prop] = { $regex: req.query[prop], $options: 'i' };
      else queryObject[prop] = req.query[prop];
    }
  }

  console.log(queryObject);
  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
