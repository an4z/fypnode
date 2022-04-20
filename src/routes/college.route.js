const express = require('express');
const router = express.Router();

const collegeController = require('../controllers/college.controller');

// get all colleges
router.get('/', collegeController.getCollegeList);



module.exports = router;