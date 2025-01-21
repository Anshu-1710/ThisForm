// backend/controllers/educationDetailsController.js
const EducationDetails = require('../models/EducationDetails');

const createEducationDetails = async (req, res) => {
  try {
    const educationDetails = new EducationDetails(req.body);
    const savedDetails = await educationDetails.save();
    res.status(201).json(savedDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllEducationDetails = async (req, res) => {
  try {
    const details = await EducationDetails.find().populate('personalId');
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEducationDetails, getAllEducationDetails };
