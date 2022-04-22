
const ExamsModel = require('../models/exams.model');

// get all exams list
exports.getExamsList = (req, res)=> {
    //console.log('here all examss list');
    ExamsModel.getAllExamss((err, examss) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Examss', examss);
        res.send(examss)
    })
}



// get exams by ID
exports.getExamsByID = (req, res)=>{
    //console.log('get emp by id');
    ExamsModel.getExamsByID(req.params.id, (err, exams)=>{
        if(err)
        res.send(err);
        console.log('single exams data',exams);
        res.send(exams);
    })
}

// create new exams
exports.createNewExams = (req, res) =>{
    const examsReqData = new ExamsModel(req.body);
    console.log('examsReqData', examsReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ExamsModel.createExams(examsReqData, (err, exams)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Exams Created Successfully', data: exams.insertId})
        })
    }
}

// update exams
exports.updateExams = (req, res)=>{
    const examsReqData = new ExamsModel(req.body);
    console.log('examsReqData update', examsReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ExamsModel.updateExams(req.params.id, examsReqData, (err, exams)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Exams updated Successfully'})
        })
    }
}

// delete exams
exports.deleteExams = (req, res)=>{
    ExamsModel.deleteExams(req.params.id, (err, exams)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Exams deleted successully!'});
    })
}