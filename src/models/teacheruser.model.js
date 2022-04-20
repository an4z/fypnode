var dbConn  = require('../../config/db.config');

var Teacheruser = function(teacheruser){
    this.ID = teacheruser.ID;
    this.fullName = teacheruser.fullName;
    this.username = teacheruser.username;
    this.email =teacheruser.email;
    this.password = teacheruser.password;
    this.primaryCollegeID = teacheruser.primaryCollegeID;
}

// get all teacherusers
Teacheruser.getAllTeacherusers = (result) =>{
    dbConn.query('SELECT * FROM teacheruser', (err, res)=>{
        if(err){
            console.log('Error while fetching teacherusers', err);
            result(null,err);
        }else{
            console.log('Teacherusers fetched successfully');
            result(null,res);
        }
    })
}
// Teacheruser.getAllTeacheruser = (result) =>{
//     dbConn.query('SELECT teacheruserName FROM teacheruser', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Teacherusers fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get teacheruser by ID from DB
Teacheruser.getTeacheruserByID = (id, result)=>{
    dbConn.query('SELECT * FROM teacheruser WHERE teacheruserID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching teacheruser by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new teacheruser
Teacheruser.createTeacheruser = (teacheruserReqData, result) =>{
    dbConn.query('INSERT INTO teacheruser SET ? ', teacheruserReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            console.log(err);
            result(null, err);
        }else{
            console.log('Teacheruser created successfully');
            result(null, res)
        }
    })
}

// update teacheruser
Teacheruser.updateTeacheruser = (id, teacheruserReqData, result)=>{
    dbConn.query("UPDATE teacheruser SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [teacheruserReqData.first_name,teacheruserReqData.last_name,teacheruserReqData.email,teacheruserReqData.phone,teacheruserReqData.organization,teacheruserReqData.designation,teacheruserReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the teacheruser');
            result(null, err);
        }else{
            console.log("Teacheruser updated successfully");
            result(null, res);
        }
    });
}

// delete teacheruser
Teacheruser.deleteTeacheruser = (id, result)=>{
    dbConn.query('DELETE FROM teacheruser WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the teacheruser');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Teacheruser;