
const TeacherModel = require('../models/teacher.model');

// get all teacher list
exports.getTeacherList = (req, res)=> {
    //console.log('here all teachers list');
    TeacherModel.getAllTeachers((err, teachers) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Teachers', teachers);
        res.send(teachers)
    })
}



// get teacher by ID
exports.getTeacherByID = (req, res)=>{
    //console.log('get emp by id');
    TeacherModel.getTeacherByID(req.params.id, (err, teacher)=>{
        if(err)
        res.send(err);
        console.log('single teacher data',teacher);
        res.send(teacher);
    })
}

// create new teacher
exports.createNewTeacher = (req, res) =>{
    const teacherReqData = new TeacherModel(req.body);
    console.log('teacherReqData', teacherReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        TeacherModel.createTeacher(teacherReqData, (err, teacher)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Teacher Created Successfully', data: teacher.insertId})
        })
    }
}

// // update teacher
// exports.updateTeacher = (req, res)=>{
//     const teacherReqData = new TeacherModel(req.body);
//     console.log('teacherReqData update', teacherReqData);
//     // check null
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         TeacherModel.updateTeacher(req.params.id, teacherReqData, (err, teacher)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'Teacher updated Successfully'})
//         })
//     }
// }

// // delete teacher
// exports.deleteTeacher = (req, res)=>{
//     TeacherModel.deleteTeacher(req.params.id, (err, teacher)=>{
//         if(err)
//         res.send(err);
//         res.json({success:true, message: 'Teacher deleted successully!'});
//     })
// }