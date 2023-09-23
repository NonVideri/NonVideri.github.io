const { Product, productSchema } = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price').limit(10);
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

  const { numericFilters, sort, fields } = req.query;

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<=': '$lte',
      '<': '$lt'
    };
    const regEx = /\b(>|>=|=|<=|<)\b/g;
    let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else result = result.sort('createdAt');

  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = skip(skip).limit(limit);

  // Then await all the actions above
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProductsStatic, getAllProducts };
