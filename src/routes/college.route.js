const express = require('express');
const router = express.Router();

const collegeController = require('../controllers/college.controller');

// get all colleges
router.get('/', collegeController.getCollegeList);

// // get college by ID
// router.get('/:id',collegeController.getCollegeByID);

// // create new college
// router.post('/', collegeController.createNewCollege);

// // update college
// router.put('/:id', collegeController.updateCollege);

// // delete college
// router.delete('/:id',collegeController.deleteCollege);

// //get all colleges
// router.get('/college', collegeController.getCollegeList);

module.exports = router;