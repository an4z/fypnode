const express = require('express');
const router = express.Router();

const webuserController = require('../controllers/webuser.controller');

// get all webusers
router.get('/', webuserController.getWebuserList);

// get webuser by ID
router.get('/:id',webuserController.getWebuserByID);

// create new webuser
router.post('/', webuserController.createNewWebuser);

// update webuser
router.put('/:id', webuserController.updateWebuser);

// delete webuser
router.delete('/:id',webuserController.deleteWebuser);

// //get all webusers
// router.get('/webuser', webuserController.getWebuserList);

module.exports = router;