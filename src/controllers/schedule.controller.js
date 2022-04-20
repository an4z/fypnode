
const ScheduleModel = require('../models/schedule.model');

// get all schedule list
exports.getScheduleList = (req, res)=> {
    //console.log('here all schedules list');
    ScheduleModel.getAllSchedules((err, schedules) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Schedules', schedules);
        res.send(schedules)
    })
}



// get schedule by ID
exports.getScheduleByID = (req, res)=>{
    //console.log('get emp by id');
    ScheduleModel.getScheduleByID(req.params.id, (err, schedule)=>{
        if(err)
        res.send(err);
        console.log('single schedule data',schedule);
        res.send(schedule);
    })
}

// create new schedule
exports.createNewSchedule = (req, res) =>{
    const scheduleReqData = new ScheduleModel(req.body);
    console.log('scheduleReqData', scheduleReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ScheduleModel.createSchedule(scheduleReqData, (err, schedule)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Schedule Created Successfully', data: schedule.insertId})
        })
    }
}

// update schedule
exports.updateSchedule = (req, res)=>{
    const scheduleReqData = new ScheduleModel(req.body);
    console.log('scheduleReqData update', scheduleReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ScheduleModel.updateSchedule(req.params.id, scheduleReqData, (err, schedule)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Schedule updated Successfully'})
        })
    }
}

// delete schedule
exports.deleteSchedule = (req, res)=>{
    ScheduleModel.deleteSchedule(req.params.id, (err, schedule)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Schedule deleted successully!'});
    })
}