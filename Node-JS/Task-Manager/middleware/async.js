const asyncWrapper = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      // In case of error, passes to the error handler middleware (built-in or custom)
      next(err);
    }
  };
};

module.exports = asyncWrapper;
