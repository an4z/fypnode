const express = require('express');
const router = express.Router();

const teacherController = require('../controllers/teacher.controller');

// get all teachers
router.get('/', teacherController.getTeacherList);

// get teacher by ID
router.get('/:id',teacherController.getTeacherByID);

// create new teacher
router.post('/', teacherController.createNewTeacher);

// update teacher
router.put('/:id', teacherController.updateTeacher);

// delete teacher
router.delete('/:id',teacherController.deleteTeacher);

// //get all teachers
// router.get('/teacher', teacherController.getTeacherList);

module.exports = router;