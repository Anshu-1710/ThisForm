// backend/models/EducationDetails.js
const mongoose = require('mongoose');

const EducationDetailsSchema = new mongoose.Schema({
  personalId: { type: mongoose.Schema.Types.ObjectId, ref: 'PersonalDetails' },
  tenth: {
    marksOrPercentage: String,
    school: String,
  },
  twelfth: {
    marksOrPercentage: String,
    school: String,
  },
  college:{
    CGPA : String,
  },


});

module.exports = mongoose.model('EducationDetails', EducationDetailsSchema);
