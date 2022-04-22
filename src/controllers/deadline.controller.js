
const DeadlineModel = require('../models/deadline.model');

// get all deadline list
exports.getDeadlineList = (req, res)=> {
    //console.log('here all deadlines list');
    DeadlineModel.getAllDeadlines((err, deadlines) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Deadlines', deadlines);
        res.send(deadlines)
    })
}



// get deadline by ID
exports.getDeadlineByID = (req, res)=>{
    //console.log('get emp by id');
    DeadlineModel.getDeadlineByID(req.params.id, (err, deadline)=>{
        if(err)
        res.send(err);
        console.log('single deadline data',deadline);
        res.send(deadline);
    })
}

// create new deadline
exports.createNewDeadline = (req, res) =>{
    const deadlineReqData = new DeadlineModel(req.body);
    console.log('deadlineReqData', deadlineReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        DeadlineModel.createDeadline(deadlineReqData, (err, deadline)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Deadline Created Successfully', data: deadline.insertId})
        })
    }
}

// update deadline
exports.updateDeadline = (req, res)=>{
    const deadlineReqData = new DeadlineModel(req.body);
    console.log('deadlineReqData update', deadlineReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        DeadlineModel.updateDeadline(req.params.id, deadlineReqData, (err, deadline)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Deadline updated Successfully'})
        })
    }
}

// delete deadline
exports.deleteDeadline = (req, res)=>{
    DeadlineModel.deleteDeadline(req.params.id, (err, deadline)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Deadline deleted successully!'});
    })
}