const express = require('express');
const router = express.Router();

const classroomController = require('../controllers/classroom.controller');

// get all classrooms
router.get('/', classroomController.getClassroomList);

// get classroom by ID
router.get('/:id',classroomController.getClassroomByID);

// create new classroom
router.post('/', classroomController.createNewClassroom);

// // update classroom
// router.put('/:id', classroomController.updateClassroom);

// // delete classroom
// router.delete('/:id',classroomController.deleteClassroom);

// //get all classrooms
// router.get('/classroom', classroomController.getClassroomList);

module.exports = router;