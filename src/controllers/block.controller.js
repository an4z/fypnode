
const BlockModel = require('../models/block.model');

// get all block list
exports.getBlockList = (req, res)=> {

    BlockModel.getAllBlocks((err, blocks) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Blocks', blocks);
        res.send(blocks)
    })
}


// get block by ID
exports.getBlockByID = (req, res)=>{
    BlockModel.getBlockByID(req.params.id, (err, block)=>{
        if(err)
        res.send(err);
        console.log('single block data',block);
        res.send(block);
    })
}

// create new block
exports.createNewBlock = (req, res) =>{
    const blockReqData = new BlockModel(req.body);
    console.log('blockReqData', blockReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        BlockModel.createBlock(blockReqData, (err, block)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Block Created Successfully', data: block.insertId})
        })
    }
}

// update block
exports.updateBlock = (req, res)=>{
    const blockReqData = new BlockModel(req.body);
    console.log('blockReqData update', blockReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        BlockModel.updateBlock(req.params.id, blockReqData, (err, block)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Block updated Successfully'})
        })
    }
}

// delete block
exports.deleteBlock = (req, res)=>{
    BlockModel.deleteBlock(req.params.id, (err, block)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Block deleted successully!'});
    })
}