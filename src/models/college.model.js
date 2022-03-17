var dbConn  = require('../../config/db.config');

var College = function(college){
    this.collegeID = college.ID;
    this.collegeName = college.CollegeName;
}

// get all colleges
College.getAllColleges = (result) =>{
    dbConn.query('SELECT * FROM college', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Colleges fetched successfully');
            result(null,res);
        }
    })
}
// College.getAllCollege = (result) =>{
//     dbConn.query('SELECT collegeName FROM college', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Colleges fetched successfully');
//             result(null,res);
//         }
//     })
// }

// // get college by ID from DB
// College.getCollegeByID = (id, result)=>{
//     dbConn.query('SELECT * FROM colleges WHERE id=?', id, (err, res)=>{
//         if(err){
//             console.log('Error while fetching college by id', err);
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     })
// }

// // create new college
// College.createCollege = (collegeReqData, result) =>{
//     dbConn.query('INSERT INTO colleges SET ? ', collegeReqData, (err, res)=>{
//         if(err){
//             console.log('Error while inserting data');
//             result(null, err);
//         }else{
//             console.log('College created successfully');
//             result(null, res)
//         }
//     })
// }

// // update college
// College.updateCollege = (id, collegeReqData, result)=>{
//     dbConn.query("UPDATE colleges SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [collegeReqData.first_name,collegeReqData.last_name,collegeReqData.email,collegeReqData.phone,collegeReqData.organization,collegeReqData.designation,collegeReqData.salary, id], (err, res)=>{
//         if(err){
//             console.log('Error while updating the college');
//             result(null, err);
//         }else{
//             console.log("College updated successfully");
//             result(null, res);
//         }
//     });
// }

// // delete college
// College.deleteCollege = (id, result)=>{
//     // dbConn.query('DELETE FROM colleges WHERE id=?', [id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the college');
//     //         result(null, err);
//     //     }else{
//     //         result(null, res);
//     //     }
//     // })
//     dbConn.query("UPDATE colleges SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the college');
//             result(null, err);
//         }else{
//             console.log("College deleted successfully");
//             result(null, res);
//         }
//     });
// }

module.exports = College;