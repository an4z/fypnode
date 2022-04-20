const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student.controller');

// get all students
router.get('/', studentController.getStudentList);

// get student by ID
router.get('/:id',studentController.getStudentByID);

// create new student
router.post('/', studentController.createNewStudent);

// update student
router.put('/:id', studentController.updateStudent);

// delete student
router.delete('/:id',studentController.deleteStudent);

// //get all students
// router.get('/student', studentController.getStudentList);

module.exports = router;