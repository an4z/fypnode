const express = require('express');
const router = express.Router();

const teacheruserController = require('../controllers/teacheruser.controller');

// get all teacherusers
router.get('/', teacheruserController.getTeacheruserList);

// get teacheruser by ID
router.get('/:id',teacheruserController.getTeacheruserByID);

// create new teacheruser
router.post('/', teacheruserController.createNewTeacheruser);

// update teacheruser
router.put('/:id', teacheruserController.updateTeacheruser);

// delete teacheruser
router.delete('/:id',teacheruserController.deleteTeacheruser);

// //get all teacherusers
// router.get('/teacheruser', teacheruserController.getTeacheruserList);

module.exports = router;