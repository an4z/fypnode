const express = require('express');
const router = express.Router();

const collegenoticeController = require('../controllers/collegenotice.controller');

// get all collegenotices
router.get('/', collegenoticeController.getCollegenoticeList);

// get collegenotice by ID
router.get('/:id',collegenoticeController.getCollegenoticeByID);

// create new collegenotice
router.post('/', collegenoticeController.createNewCollegenotice);

// update collegenotice
router.put('/:id', collegenoticeController.updateCollegenotice);

// delete collegenotice
router.delete('/:id',collegenoticeController.deleteCollegenotice);

// //get all collegenotices
// router.get('/collegenotice', collegenoticeController.getCollegenoticeList);

module.exports = router;