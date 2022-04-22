const { TIME } = require('mysql/lib/protocol/constants/types');
var dbConn  = require('../../config/db.config');

var Deadline = function(deadline){
    this.ID = deadline.ID;
    this.date = deadline.date;
    this.time = deadline.time;
    this.subject = deadline.subject;
    this.semester = deadline.semester;
    this.name = deadline.name;
    this.section = deadline.section;
    this.collegeID = deadline.collegeID;
}

// get all deadlines
Deadline.getAllDeadlines = (result) =>{
    dbConn.query('SELECT * FROM deadline', (err, res)=>{
        if(err){
            console.log('Error while fetching deadlines', err);
            result(null,err);
        }else{
            console.log('Deadlines fetched successfully');
            result(null,res);
        }
    })
}
// Deadline.getAllDeadline = (result) =>{
//     dbConn.query('SELECT deadlineName FROM deadline', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Deadlines fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get deadline by ID from DB
Deadline.getDeadlineByID = (id, result)=>{
    dbConn.query('SELECT * FROM deadline WHERE collegeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching deadline by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new deadline
Deadline.createDeadline = (deadlineReqData, result) =>{
    dbConn.query('INSERT INTO deadline SET ? ', deadlineReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Deadline created successfully');
            result(null, res)
        }
    })
}

// update deadline
Deadline.updateDeadline = (id, deadlineReqData, result)=>{
    dbConn.query("UPDATE deadline SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [deadlineReqData.first_name,deadlineReqData.last_name,deadlineReqData.email,deadlineReqData.phone,deadlineReqData.organization,deadlineReqData.designation,deadlineReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the deadline');
            result(null, err);
        }else{
            console.log("Deadline updated successfully");
            result(null, res);
        }
    });
}

// delete deadline
Deadline.deleteDeadline = (id, result)=>{
    dbConn.query('DELETE FROM deadline WHERE ID=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the deadline');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Deadline;