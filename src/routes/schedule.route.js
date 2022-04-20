const express = require('express');
const router = express.Router();

const scheduleController = require('../controllers/schedule.controller');

// get all schedules
router.get('/', scheduleController.getScheduleList);

// get schedule by ID
router.get('/:id',scheduleController.getScheduleByID);

// create new schedule
router.post('/', scheduleController.createNewSchedule);

// update schedule
router.put('/:id', scheduleController.updateSchedule);

// delete schedule
router.delete('/:id',scheduleController.deleteSchedule);

// //get all schedules
// router.get('/schedule', scheduleController.getScheduleList);

module.exports = router;