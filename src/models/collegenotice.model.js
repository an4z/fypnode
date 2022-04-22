const { TIME } = require('mysql/lib/protocol/constants/types');
var dbConn  = require('../../config/db.config');

var Collegenotice = function(collegenotice){
    
    this.ID = collegenotice.ID;
    this.faculty = collegenotice.faculty;
    this.section = collegenotice.section;
    this.notice = collegenotice.notice;
    this.collegeID = collegenotice.collegeID;
    this.dateTime = collegenotice.dateTime;
    this.noticeSender = collegenotice.noticeSender;
    this.noticeTitle = collegenotice.noticeTitle;
}

// get all collegenotices
Collegenotice.getAllCollegenotices = (result) =>{
    dbConn.query('SELECT * FROM collegenotice', (err, res)=>{
        if(err){
            console.log('Error while fetching collegenotices', err);
            result(null,err);
        }else{
            console.log('Collegenotices fetched successfully');
            result(null,res);
        }
    })
}
// Collegenotice.getAllCollegenotice = (result) =>{
//     dbConn.query('SELECT collegenoticeName FROM collegenotice', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Collegenotices fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get collegenotice by ID from DB
Collegenotice.getCollegenoticeByID = (id, result)=>{
    dbConn.query('SELECT * FROM collegenotice WHERE collegeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching collegenotice by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new collegenotice
Collegenotice.createCollegenotice = (collegenoticeReqData, result) =>{
    dbConn.query('INSERT INTO collegenotice SET ? ', collegenoticeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Collegenotice created successfully');
            result(null, res)
        }
    })
}

// update collegenotice
Collegenotice.updateCollegenotice = (id, collegenoticeReqData, result)=>{
    dbConn.query("UPDATE collegenotice SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [collegenoticeReqData.first_name,collegenoticeReqData.last_name,collegenoticeReqData.email,collegenoticeReqData.phone,collegenoticeReqData.organization,collegenoticeReqData.designation,collegenoticeReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the collegenotice');
            result(null, err);
        }else{
            console.log("Collegenotice updated successfully");
            result(null, res);
        }
    });
}

// delete collegenotice
Collegenotice.deleteCollegenotice = (id, result)=>{
    dbConn.query('DELETE FROM collegenotice WHERE ID=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the collegenotice');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    
}

module.exports = Collegenotice;