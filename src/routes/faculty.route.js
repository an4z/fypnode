const express = require('express');
const router = express.Router();

const facultyController = require('../controllers/faculty.controller');

// get all facultys
router.get('/', facultyController.getFacultyList);

// get faculty by ID
router.get('/:id',facultyController.getFacultyByID);

// create new faculty
router.post('/', facultyController.createNewFaculty);

// update faculty
router.put('/:id', facultyController.updateFaculty);

// delete faculty
router.delete('/:id',facultyController.deleteFaculty);

// //get all facultys
// router.get('/faculty', facultyController.getFacultyList);

module.exports = router;