
const ClassroomModel = require('../models/classroom.model');

// get all classroom list
exports.getClassroomList = (req, res)=> {
    //console.log('here all classrooms list');
    ClassroomModel.getAllClassrooms((err, classrooms) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Classrooms', classrooms);
        res.send(classrooms)
    })
}



// get classroom by ID
exports.getClassroomByID = (req, res)=>{
    //console.log('get emp by id');
    ClassroomModel.getClassroomByID(req.params.id, (err, classroom)=>{
        if(err)
        res.send(err);
        console.log('single classroom data',classroom);
        res.send(classroom);
    })
}

// create new classroom
exports.createNewClassroom = (req, res) =>{
    const classroomReqData = new ClassroomModel(req.body);
    console.log('classroomReqData', classroomReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ClassroomModel.createClassroom(classroomReqData, (err, classroom)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Classroom Created Successfully', data: classroom.insertId})
        })
    }
}

// // update classroom
// exports.updateClassroom = (req, res)=>{
//     const classroomReqData = new ClassroomModel(req.body);
//     console.log('classroomReqData update', classroomReqData);
//     // check null
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         ClassroomModel.updateClassroom(req.params.id, classroomReqData, (err, classroom)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'Classroom updated Successfully'})
//         })
//     }
// }

// // delete classroom
// exports.deleteClassroom = (req, res)=>{
//     ClassroomModel.deleteClassroom(req.params.id, (err, classroom)=>{
//         if(err)
//         res.send(err);
//         res.json({success:true, message: 'Classroom deleted successully!'});
//     })
// }