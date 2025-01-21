// backend/controllers/personalDetailsController.js
const PersonalDetails = require('../models/PersonalDetails');

const createPersonalDetails = async (req, res) => {
  try {
    const personalDetails = new PersonalDetails(req.body);
    const savedDetails = await personalDetails.save();
    res.status(201).json(savedDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//To fetch and show all the details
const getAllPersonalDetails = async (req, res) => {
  try {
    const details = await PersonalDetails.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPersonalDetails, getAllPersonalDetails };
