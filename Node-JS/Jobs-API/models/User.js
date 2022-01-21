const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

// Hash password mongoose middleware
// Use function keyword so that the scope points to the document
UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  // 'this' points at the document schema
  this.password = await bcrypt.hash(this.password, salt);
  // No need for next() as it is automatically added
});

// User instance method, useful to declutter the controllers
UserSchema.methods.createJWT = function () {
  // Never place the secret here
  return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME
  });
};

module.exports = mongoose.model('User', UserSchema);
