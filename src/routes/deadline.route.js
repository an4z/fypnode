const express = require('express');
const router = express.Router();

const deadlineController = require('../controllers/deadline.controller');

// get all deadlines
router.get('/', deadlineController.getDeadlineList);

// get deadline by ID
router.get('/:id',deadlineController.getDeadlineByID);

// create new deadline
router.post('/', deadlineController.createNewDeadline);

// update deadline
router.put('/:id', deadlineController.updateDeadline);

// delete deadline
router.delete('/:id',deadlineController.deleteDeadline);

// //get all deadlines
// router.get('/deadline', deadlineController.getDeadlineList);

module.exports = router;