const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name must be provided.'], minLength: 3, maxLength: 50 },
  email: {
    type: String,
    required: [true, 'E-mail must be provided.'],
    match: [
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      'A valid e-mail must be provided.'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password must be provided.'],
    minLength: 6,
    maxLength: 500
  }
});

module.exports = mongoose.model('User', UserSchema);
