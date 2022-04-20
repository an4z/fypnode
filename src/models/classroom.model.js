var dbConn  = require('../../config/db.config');

var Classroom = function(classroom){
    this.classroomID = classroom.classroomID;
    this.classroomName = classroom.classroomName;
    this.blockID = classroom.blockID;
    this.collegeID = classroom.collegeID;
}

// get all classrooms
Classroom.getAllClassrooms = (result) =>{
    dbConn.query('SELECT * FROM classroom', (err, res)=>{
        if(err){
            console.log('Error while fetching classrooms', err);
            result(null,err);
        }else{
            console.log('Classrooms fetched successfully');
            result(null,res);
        }
    })
}
// Classroom.getAllClassroom = (result) =>{
//     dbConn.query('SELECT classroomName FROM classroom', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Classrooms fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get classroom by ID from DB
Classroom.getClassroomByID = (id, result)=>{
    dbConn.query('SELECT * FROM classroom WHERE collegeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching classroom by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// // create new classroom
Classroom.createClassroom = (classroomReqData, result) =>{
    dbConn.query('INSERT INTO classroom SET ? ', classroomReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Classroom created successfully');
            result(null, res)
        }
    })
}

// update classroom
Classroom.updateClassroom = (id, classroomReqData, result)=>{
    dbConn.query("UPDATE classroom SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [classroomReqData.first_name,classroomReqData.last_name,classroomReqData.email,classroomReqData.phone,classroomReqData.organization,classroomReqData.designation,classroomReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the classroom');
            result(null, err);
        }else{
            console.log("Classroom updated successfully");
            result(null, res);
        }
    });
}

// delete classroom
Classroom.deleteClassroom = (id, result)=>{
    dbConn.query('DELETE FROM classroom WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the classroom');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    
}

module.exports = Classroom;