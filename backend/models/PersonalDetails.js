
const mongoose = require('mongoose');

const PersonalDetailsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  dob: Date,
  mobile: String,
  address: String,
  country: String,
  pincode: String,
});

module.exports = mongoose.model('PersonalDetails', PersonalDetailsSchema);
