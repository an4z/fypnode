var dbConn  = require('../../config/db.config');

var Block = function(block){
    this.blockID = block.blockID;
    this.blockName = block.blockName;
    this.collegeID = block.collegeID;
}

// get all blocks
Block.getAllBlocks = (result) =>{
    dbConn.query('SELECT * FROM block', (err, res)=>{
        if(err){
            console.log('Error while fetching blocks', err);
            result(null,err);
        }else{
            console.log('Blocks fetched successfully');
            result(null,res);
        }
    })
}
// Block.getAllBlock = (result) =>{
//     dbConn.query('SELECT blockName FROM block', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Blocks fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get block by ID from DB
Block.getBlockByID = (id, result)=>{
    dbConn.query('SELECT * FROM block WHERE collegeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching block by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// // create new block
Block.createBlock = (blockReqData, result) =>{
    dbConn.query('INSERT INTO block SET ? ', blockReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Block created successfully');
            result(null, res)
        }
    })
}

// // update block
// Block.updateBlock = (id, blockReqData, result)=>{
//     dbConn.query("UPDATE blocks SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [blockReqData.first_name,blockReqData.last_name,blockReqData.email,blockReqData.phone,blockReqData.organization,blockReqData.designation,blockReqData.salary, id], (err, res)=>{
//         if(err){
//             console.log('Error while updating the block');
//             result(null, err);
//         }else{
//             console.log("Block updated successfully");
//             result(null, res);
//         }
//     });
// }

// // delete block
// Block.deleteBlock = (id, result)=>{
//     // dbConn.query('DELETE FROM blocks WHERE id=?', [id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the block');
//     //         result(null, err);
//     //     }else{
//     //         result(null, res);
//     //     }
//     // })
//     dbConn.query("UPDATE blocks SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the block');
//             result(null, err);
//         }else{
//             console.log("Block deleted successfully");
//             result(null, res);
//         }
//     });
// }

module.exports = Block;