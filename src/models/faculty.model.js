var dbConn  = require('../../config/db.config');

var Faculty = function(faculty){
    this.facultyID = faculty.facultyID;
    this.facultyName = faculty.facultyName;
    this.collegeID = faculty.collegeID;
}

// get all facultys
Faculty.getAllFacultys = (result) =>{
    dbConn.query('SELECT * FROM faculty', (err, res)=>{
        if(err){
            console.log('Error while fetching facultys', err);
            result(null,err);
        }else{
            console.log('Facultys fetched successfully');
            result(null,res);
        }
    })
}
// Faculty.getAllFaculty = (result) =>{
//     dbConn.query('SELECT facultyName FROM faculty', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Facultys fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get faculty by ID from DB
Faculty.getFacultyByID = (id, result)=>{
    dbConn.query('SELECT * FROM faculty WHERE collegeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching faculty by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// // create new faculty
Faculty.createFaculty = (facultyReqData, result) =>{
    dbConn.query('INSERT INTO faculty SET ? ', facultyReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Faculty created successfully');
            result(null, res)
        }
    })
}

// // update faculty
// Faculty.updateFaculty = (id, facultyReqData, result)=>{
//     dbConn.query("UPDATE facultys SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [facultyReqData.first_name,facultyReqData.last_name,facultyReqData.email,facultyReqData.phone,facultyReqData.organization,facultyReqData.designation,facultyReqData.salary, id], (err, res)=>{
//         if(err){
//             console.log('Error while updating the faculty');
//             result(null, err);
//         }else{
//             console.log("Faculty updated successfully");
//             result(null, res);
//         }
//     });
// }

// // delete faculty
// Faculty.deleteFaculty = (id, result)=>{
//     // dbConn.query('DELETE FROM facultys WHERE id=?', [id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the faculty');
//     //         result(null, err);
//     //     }else{
//     //         result(null, res);
//     //     }
//     // })
//     dbConn.query("UPDATE facultys SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the faculty');
//             result(null, err);
//         }else{
//             console.log("Faculty deleted successfully");
//             result(null, res);
//         }
//     });
// }

module.exports = Faculty;