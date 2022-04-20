
const TeacheruserModel = require('../models/teacheruser.model');

// get all teacheruser list
exports.getTeacheruserList = (req, res)=> {
    //console.log('here all teacherusers list');
    TeacheruserModel.getAllTeacherusers((err, teacherusers) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Teacherusers', teacherusers);
        res.send(teacherusers)
    })
}



// get teacheruser by ID
exports.getTeacheruserByID = (req, res)=>{
    //console.log('get emp by id');
    TeacheruserModel.getTeacheruserByID(req.params.id, (err, teacheruser)=>{
        if(err)
        res.send(err);
        console.log('single teacheruser data',teacheruser);
        res.send(teacheruser);
    })
}

// create new teacheruser
exports.createNewTeacheruser = (req, res) =>{
    const teacheruserReqData = new TeacheruserModel(req.body);
    console.log('teacheruserReqData', teacheruserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        TeacheruserModel.createTeacheruser(teacheruserReqData, (err, teacheruser)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Teacheruser Created Successfully', data: teacheruser.insertId})
        })
    }
}

// update teacheruser
exports.updateTeacheruser = (req, res)=>{
    const teacheruserReqData = new TeacheruserModel(req.body);
    console.log('teacheruserReqData update', teacheruserReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        TeacheruserModel.updateTeacheruser(req.params.id, teacheruserReqData, (err, teacheruser)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Teacheruser updated Successfully'})
        })
    }
}

// delete teacheruser
exports.deleteTeacheruser = (req, res)=>{
    TeacheruserModel.deleteTeacheruser(req.params.id, (err, teacheruser)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Teacheruser deleted successully!'});
    })
}