const express = require('express');
const router = express.Router();

const sectionController = require('../controllers/section.controller');

// get all sections
router.get('/', sectionController.getSectionList);

// get section by ID
router.get('/:id',sectionController.getSectionByID);

// create new section
router.post('/', sectionController.createNewSection);

// // update section
// router.put('/:id', sectionController.updateSection);

// // delete section
// router.delete('/:id',sectionController.deleteSection);

// //get all sections
// router.get('/section', sectionController.getSectionList);

module.exports = router;