var dbConn  = require('../../config/db.config');

var Student = function(student){
    this.studentID = student.studentID;
    this.fullName = student.fullName;
    this.username = student.username;
    this.collegeID = student.collegeID;
    this.email = student.email;
    this.sectionID = student.sectionID;
    this.password = student.password;
}

// get all students
Student.getAllStudents = (result) =>{
    dbConn.query('SELECT * FROM student', (err, res)=>{
        if(err){
            console.log('Error while fetching students', err);
            result(null,err);
        }else{
            console.log('Students fetched successfully');
            result(null,res);
        }
    })
}
// Student.getAllStudent = (result) =>{
//     dbConn.query('SELECT studentName FROM student', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Students fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get student by ID from DB
Student.getStudentByID = (id, result)=>{
    dbConn.query('SELECT * FROM student WHERE studentID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching student by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new student
Student.createStudent = (studentReqData, result) =>{
    dbConn.query('INSERT INTO student SET ? ', studentReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            console.log(err);
            result(null, err);
        }else{
            console.log('Student created successfully');
            result(null, res)
        }
    })
}

// update student
Student.updateStudent = (id, studentReqData, result)=>{
    dbConn.query("UPDATE student SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [studentReqData.first_name,studentReqData.last_name,studentReqData.email,studentReqData.phone,studentReqData.organization,studentReqData.designation,studentReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the student');
            result(null, err);
        }else{
            console.log("Student updated successfully");
            result(null, res);
        }
    });
}

// delete student
Student.deleteStudent = (id, result)=>{
    dbConn.query('DELETE FROM student WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the student');
            result(null, err);
        }else{
            result(null, res);
        }
    })
    
}

module.exports = Student;