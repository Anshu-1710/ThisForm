const express = require('express');
const { createEducationDetails, getAllEducationDetails } = require('../Controllers/educationDetailsController');
const router = express.Router();

router.post('/', createEducationDetails);
router.get('/', getAllEducationDetails);

module.exports = router;
