// This function will make sure that any new or updated ideas
// are still worth at least one million dollars!
// The total value of an idea is the product of its numWeeks and weeklyRevenue properties.

const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  if (numWeeks * weeklyRevenue >= 1000000) return next();
  res.sendStatus(400);
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
