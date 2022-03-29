
const StudentModel = require('../models/student.model');

// get all student list
exports.getStudentList = (req, res)=> {
    //console.log('here all students list');
    StudentModel.getAllStudents((err, students) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Students', students);
        res.send(students)
    })
}



// get student by ID
exports.getStudentByID = (req, res)=>{
    //console.log('get emp by id');
    StudentModel.getStudentByID(req.params.id, (err, student)=>{
        if(err)
        res.send(err);
        console.log('single student data',student);
        res.send(student);
    })
}

// create new student
exports.createNewStudent = (req, res) =>{
    const studentReqData = new StudentModel(req.body);
    console.log('studentReqData', studentReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        StudentModel.createStudent(studentReqData, (err, student)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Student Created Successfully', data: student.insertId})
        })
    }
}

// // update student
// exports.updateStudent = (req, res)=>{
//     const studentReqData = new StudentModel(req.body);
//     console.log('studentReqData update', studentReqData);
//     // check null
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         StudentModel.updateStudent(req.params.id, studentReqData, (err, student)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'Student updated Successfully'})
//         })
//     }
// }

// // delete student
// exports.deleteStudent = (req, res)=>{
//     StudentModel.deleteStudent(req.params.id, (err, student)=>{
//         if(err)
//         res.send(err);
//         res.json({success:true, message: 'Student deleted successully!'});
//     })
// }