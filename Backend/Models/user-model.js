const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contact: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true }
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;