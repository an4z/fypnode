const express = require('express');
const router = express.Router();

const examsController = require('../controllers/exams.controller');

// get all examss
router.get('/', examsController.getExamsList);

// get exams by ID
router.get('/:id',examsController.getExamsByID);

// create new exams
router.post('/', examsController.createNewExams);

// update exams
router.put('/:id', examsController.updateExams);

// delete exams
router.delete('/:id',examsController.deleteExams);

// //get all examss
// router.get('/exams', examsController.getExamsList);

module.exports = router;