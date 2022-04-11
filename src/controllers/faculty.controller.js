
const FacultyModel = require('../models/faculty.model');

// get all faculty list
exports.getFacultyList = (req, res)=> {
    //console.log('here all facultys list');
    FacultyModel.getAllFacultys((err, facultys) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Facultys', facultys);
        res.send(facultys)
    })
}



// get faculty by ID
exports.getFacultyByID = (req, res)=>{
    //console.log('get emp by id');
    FacultyModel.getFacultyByID(req.params.id, (err, faculty)=>{
        if(err)
        res.send(err);
        console.log('single faculty data',faculty);
        res.send(faculty);
    })
}

// create new faculty
exports.createNewFaculty = (req, res) =>{
    const facultyReqData = new FacultyModel(req.body);
    console.log('facultyReqData', facultyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        FacultyModel.createFaculty(facultyReqData, (err, faculty)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Faculty Created Successfully', data: faculty.insertId})
        })
    }
}

// // update faculty
// exports.updateFaculty = (req, res)=>{
//     const facultyReqData = new FacultyModel(req.body);
//     console.log('facultyReqData update', facultyReqData);
//     // check null
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         FacultyModel.updateFaculty(req.params.id, facultyReqData, (err, faculty)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'Faculty updated Successfully'})
//         })
//     }
// }

// // delete faculty
// exports.deleteFaculty = (req, res)=>{
//     FacultyModel.deleteFaculty(req.params.id, (err, faculty)=>{
//         if(err)
//         res.send(err);
//         res.json({success:true, message: 'Faculty deleted successully!'});
//     })
// }