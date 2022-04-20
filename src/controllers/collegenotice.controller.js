
const CollegenoticeModel = require('../models/collegenotice.model');

// get all collegenotice list
exports.getCollegenoticeList = (req, res)=> {
    //console.log('here all collegenotices list');
    CollegenoticeModel.getAllCollegenotices((err, collegenotices) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Collegenotices', collegenotices);
        res.send(collegenotices)
    })
}



// get collegenotice by ID
exports.getCollegenoticeByID = (req, res)=>{
    //console.log('get emp by id');
    CollegenoticeModel.getCollegenoticeByID(req.params.id, (err, collegenotice)=>{
        if(err)
        res.send(err);
        console.log('single collegenotice data',collegenotice);
        res.send(collegenotice);
    })
}

// create new collegenotice
exports.createNewCollegenotice = (req, res) =>{
    const collegenoticeReqData = new CollegenoticeModel(req.body);
    console.log('collegenoticeReqData', collegenoticeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CollegenoticeModel.createCollegenotice(collegenoticeReqData, (err, collegenotice)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Collegenotice Created Successfully', data: collegenotice.insertId})
        })
    }
}

// update collegenotice
exports.updateCollegenotice = (req, res)=>{
    const collegenoticeReqData = new CollegenoticeModel(req.body);
    console.log('collegenoticeReqData update', collegenoticeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        CollegenoticeModel.updateCollegenotice(req.params.id, collegenoticeReqData, (err, collegenotice)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Collegenotice updated Successfully'})
        })
    }
}

// delete collegenotice
exports.deleteCollegenotice = (req, res)=>{
    CollegenoticeModel.deleteCollegenotice(req.params.id, (err, collegenotice)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Collegenotice deleted successully!'});
    })
}