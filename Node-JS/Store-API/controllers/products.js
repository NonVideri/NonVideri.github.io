const { Product, productSchema } = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price');
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

  const { sort } = req.query;
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else result = result.sort('createdAt');

  // Then await all the actions above
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
