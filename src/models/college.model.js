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

module.exports = College;