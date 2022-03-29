
const WebuserModel = require('../models/webuser.model');

// get all webuser list
exports.getWebuserList = (req, res)=> {
    //console.log('here all webusers list');
    WebuserModel.getAllWebusers((err, webusers) =>{
        console.log('We are there');
        if(err)
        res.send(err);
        console.log('Webusers', webusers);
        res.send(webusers)
    })
}



// get webuser by ID
exports.getWebuserByID = (req, res)=>{
    //console.log('get emp by id');
    WebuserModel.getWebuserByID(req.params.id, (err, webuser)=>{
        if(err)
        res.send(err);
        console.log('single webuser data',webuser);
        res.send(webuser);
    })
}

// create new webuser
exports.createNewWebuser = (req, res) =>{
    const webuserReqData = new WebuserModel(req.body);
    console.log('webuserReqData', webuserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        WebuserModel.createWebuser(webuserReqData, (err, webuser)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Webuser Created Successfully', data: webuser.insertId})
        })
    }
}

// update webuser
exports.updateWebuser = (req, res)=>{
    const webuserReqData = new WebuserModel(req.body);
    console.log('webuserReqData update', webuserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        WebuserModel.updateWebuser(req.params.id, webuserReqData, (err, webuser)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Webuser updated Successfully'})
        })
    }
}

// // delete webuser
// exports.deleteWebuser = (req, res)=>{
//     WebuserModel.deleteWebuser(req.params.id, (err, webuser)=>{
//         if(err)
//         res.send(err);
//         res.json({success:true, message: 'Webuser deleted successully!'});
//     })
// }