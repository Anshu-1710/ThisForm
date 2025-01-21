
const express = require('express');
const { createPersonalDetails, getAllPersonalDetails } = require('../Controllers/personalDetailsController');
const router = express.Router();

router.post('/', createPersonalDetails);
router.get('/', getAllPersonalDetails);

// backend/routes/personalDetailsRoutes.js
// router.get('/', (req, res) => {
//     res.send('GET request is working!');
//   });
  

module.exports = router;
