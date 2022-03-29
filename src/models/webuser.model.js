var dbConn  = require('../../config/db.config');

var Webuser = function(webuser){
    this.id = webuser.id;
    this.email = webuser.email;
    this.password = webuser.password;
    this.name = webuser.name;
    this.collegeID = webuser.collegeID;
    this.isMasterUser = webuser.isMasterUser;
    
}

// get all webusers
Webuser.getAllWebusers = (result) =>{
    dbConn.query('SELECT * FROM webuser', (err, res)=>{
        if(err){
            console.log('Error while fetching webusers', err);
            result(null,err);
        }else{
            console.log('Webusers fetched successfully');
            result(null,res);
        }
    })
}
// Webuser.getAllWebuser = (result) =>{
//     dbConn.query('SELECT webuserName FROM webuser', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Webusers fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get webuser by ID from DB
Webuser.getWebuserByID = (id, result)=>{
    dbConn.query('SELECT * FROM webuser WHERE webuserID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching webuser by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new webuser
Webuser.createWebuser = (webuserReqData, result) =>{
    dbConn.query('INSERT INTO webuser SET ? ', webuserReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            console.log(err);
            result(null, err);
        }else{
            console.log('Webuser created successfully');
            result(null, res)
        }
    })
}

// // update webuser
Webuser.updateWebuser = (id, webuserReqData, result)=>{
    dbConn.query("UPDATE webuser SET password=? WHERE id = ?", [webuserReqData.password, id], (err, res)=>{
        if(err){
            console.log('Error while updating the webuser');
            result(null, err);
        }else{
            console.log("Webuser updated successfully");
            result(null, res);
        }
    });
}

// // delete webuser
// Webuser.deleteWebuser = (id, result)=>{
//     // dbConn.query('DELETE FROM webusers WHERE id=?', [id], (err, res)=>{
//     //     if(err){
//     //         console.log('Error while deleting the webuser');
//     //         result(null, err);
//     //     }else{
//     //         result(null, res);
//     //     }
//     // })
//     dbConn.query("UPDATE webusers SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
//         if(err){
//             console.log('Error while deleting the webuser');
//             result(null, err);
//         }else{
//             console.log("Webuser deleted successfully");
//             result(null, res);
//         }
//     });
// }

module.exports = Webuser;