var dbConn  = require('../../config/db.config');

var Teacher = function(teacher){
    this.teacherID = teacher.teacherID;
    this.collegeID = teacher.collegeID;
    this.teacherUsn = teacher.teacherUsn;
    this.name = teacher.name;

}

// get all teachers
Teacher.getAllTeachers = (result) =>{
    dbConn.query('SELECT * FROM teacher', (err, res)=>{
        if(err){
            console.log('Error while fetching teachers', err);
            result(null,err);
        }else{
            console.log('Teachers fetched successfully');
            result(null,res);
        }
    })
}
// Teacher.getAllTeacher = (result) =>{
//     dbConn.query('SELECT teacherName FROM teacher', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Teachers fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get teacher by ID from DB
Teacher.getTeacherByID = (id, result)=>{
    dbConn.query('SELECT * FROM teacher WHERE teacherID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching teacher by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new teacher
Teacher.createTeacher = (teacherReqData, result) =>{
    dbConn.query('INSERT INTO teacher SET ? ', teacherReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            console.log(err);
            result(null, err);
        }else{
            console.log('Teacher created successfully');
            result(null, res)
        }
    })
}

// update teacher
Teacher.updateTeacher = (id, teacherReqData, result)=>{
    dbConn.query("UPDATE teacher SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [teacherReqData.first_name,teacherReqData.last_name,teacherReqData.email,teacherReqData.phone,teacherReqData.organization,teacherReqData.designation,teacherReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the teacher');
            result(null, err);
        }else{
            console.log("Teacher updated successfully");
            result(null, res);
        }
    });
}

// delete teacher
Teacher.deleteTeacher = (id, result)=>{
    dbConn.query('DELETE FROM teacher WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the teacher');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    
}

module.exports = Teacher;