// Used to validate ID before the database request.
// For some reason, this creates ERR_HTTP_HEADERS_SENT error when used with .param()
// Need to investigate further, will leave it for now.

const isNumeric = (req, res, next, id) => {
  const result = /^\d+$/.test(id);
  if (!result) {
    return res.sendStatus(404);
  }
  next();
};

module.exports = isNumeric;
