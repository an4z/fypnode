const express = require('express');
const router = express.Router();

const blockController = require('../controllers/block.controller');

// get all blocks
router.get('/', blockController.getBlockList);

// get block by ID
router.get('/:id',blockController.getBlockByID);

// create new block
router.post('/', blockController.createNewBlock);

// update block
router.put('/:id', blockController.updateBlock);

// delete block
router.delete('/:id',blockController.deleteBlock);

// //get all blocks
// router.get('/block', blockController.getBlockList);

module.exports = router;