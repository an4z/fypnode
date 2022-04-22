const { TIME } = require('mysql/lib/protocol/constants/types');
var dbConn  = require('../../config/db.config');

var Exams = function(exams){
    this.ID = exams.ID;
    this.date = exams.date;
    this.time = exams.time;
    this.subject = exams.subject;
    this.semester = exams.semester;
    this.name = exams.name;
    this.section = exams.section;
    this.collegeID = exams.collegeID;
    this.faculty = exams.faculty;
}

// get all examss
Exams.getAllExamss = (result) =>{
    dbConn.query('SELECT * FROM exams', (err, res)=>{
        if(err){
            console.log('Error while fetching examss', err);
            result(null,err);
        }else{
            console.log('Examss fetched successfully');
            result(null,res);
        }
    })
}
// Exams.getAllExams = (result) =>{
//     dbConn.query('SELECT examsName FROM exams', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Examss fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get exams by ID from DB
Exams.getExamsByID = (id, result)=>{
    dbConn.query('SELECT * FROM exams WHERE collegeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching exams by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new exams
Exams.createExams = (examsReqData, result) =>{
    dbConn.query('INSERT INTO exams SET ? ', examsReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Exams created successfully');
            result(null, res)
        }
    })
}

// update exams
Exams.updateExams = (id, examsReqData, result)=>{
    dbConn.query("UPDATE exams SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [examsReqData.first_name,examsReqData.last_name,examsReqData.email,examsReqData.phone,examsReqData.organization,examsReqData.designation,examsReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the exams');
            result(null, err);
        }else{
            console.log("Exams updated successfully");
            result(null, res);
        }
    });
}

// delete exams
Exams.deleteExams = (id, result)=>{
    dbConn.query('DELETE FROM exams WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the exams');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Exams;