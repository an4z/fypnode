const { TIME } = require('mysql/lib/protocol/constants/types');
var dbConn  = require('../../config/db.config');

var Schedule = function(schedule){
    this.scheduleID = schedule.ID;
    this.sectionID = schedule.sectionID;
    this.startTime = schedule.startTime;
    this.endTime = schedule.endTime;
    this.block = schedule.block;
    this.classroom = schedule.classroom;
    this.teacher = schedule.teacher;
    this.moduleName = schedule.moduleName;
    this.collegeID = schedule.collegeID;
    this.day = schedule.day;
}

// get all schedules
Schedule.getAllSchedules = (result) =>{
    dbConn.query('SELECT * FROM schedule', (err, res)=>{
        if(err){
            console.log('Error while fetching schedules', err);
            result(null,err);
        }else{
            console.log('Schedules fetched successfully');
            result(null,res);
        }
    })
}
// Schedule.getAllSchedule = (result) =>{
//     dbConn.query('SELECT scheduleName FROM schedule', (err, res)=>{
//         if(err){
//             console.log('Error while fetching employess', err);
//             result(null,err);
//         }else{
//             console.log('Schedules fetched successfully');
//             result(null,res);
//         }
//     })
// }

// get schedule by ID from DB
Schedule.getScheduleByID = (id, result)=>{
    dbConn.query('SELECT * FROM schedule WHERE collegeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching schedule by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new schedule
Schedule.createSchedule = (scheduleReqData, result) =>{
    dbConn.query('INSERT INTO schedule SET ? ', scheduleReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Schedule created successfully');
            result(null, res)
        }
    })
}

// update schedule
Schedule.updateSchedule = (id, scheduleReqData, result)=>{
    dbConn.query("UPDATE schedule SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [scheduleReqData.first_name,scheduleReqData.last_name,scheduleReqData.email,scheduleReqData.phone,scheduleReqData.organization,scheduleReqData.designation,scheduleReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the schedule');
            result(null, err);
        }else{
            console.log("Schedule updated successfully");
            result(null, res);
        }
    });
}

// delete schedule
Schedule.deleteSchedule = (id, result)=>{
    dbConn.query('DELETE FROM schedule WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the schedule');
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Schedule;