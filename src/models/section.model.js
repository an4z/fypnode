var dbConn  = require('../../config/db.config');

var Section = function(section){
    this.sectionID = section.ID;
    this.sectionName = section.sectionName;
    this.semester = section.semester;
    this.collegeID = section.collegeID;
    this.facultyID = section.facultyID;
}

// get all sections
Section.getAllSections = (result) =>{
    dbConn.query('SELECT * FROM section', (err, res)=>{
        if(err){
            console.log('Error while fetching sections', err);
            result(null,err);
        }else{
            console.log('Sections fetched successfully');
            result(null,res);
        }
    })
}
// Section.getAllSection = (result) =>{
//     dbConn.query('SELECT sectionName FROM section', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Sections fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get section by ID from DB
Section.getSectionByID = (id, result)=>{
    dbConn.query('SELECT * FROM section WHERE collegeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching section by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new section
Section.createSection = (sectionReqData, result) =>{
    dbConn.query('INSERT INTO section SET ? ', sectionReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Section created successfully');
            result(null, res)
        }
    })
}

// update section
Section.updateSection = (id, sectionReqData, result)=>{
    dbConn.query("UPDATE section SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [sectionReqData.first_name,sectionReqData.last_name,sectionReqData.email,sectionReqData.phone,sectionReqData.organization,sectionReqData.designation,sectionReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the section');
            result(null, err);
        }else{
            console.log("Section updated successfully");
            result(null, res);
        }
    });
}

// delete section
Section.deleteSection = (id, result)=>{
    dbConn.query('DELETE FROM section WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the section');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    
}

module.exports = Section;