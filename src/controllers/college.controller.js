
const CollegeModel = require('../models/college.model');

// get all college list
exports.getCollegeList = (req, res)=> {
    //console.log('here all colleges list');
    CollegeModel.getAllColleges((err, colleges) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Colleges', colleges);
        res.send(colleges)
    })
}



// // get college by ID
// exports.getCollegeByID = (req, res)=>{
//     //console.log('get emp by id');
//     CollegeModel.getCollegeByID(req.params.id, (err, college)=>{
//         if(err)
//         res.send(err);
//         console.log('single college data',college);
//         res.send(college);
//     })
// }

// // create new college
// exports.createNewCollege = (req, res) =>{
//     const collegeReqData = new CollegeModel(req.body);
//     console.log('collegeReqData', collegeReqData);
//     // check null
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         CollegeModel.createCollege(collegeReqData, (err, college)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'College Created Successfully', data: college.insertId})
//         })
//     }
// }

// // update college
// exports.updateCollege = (req, res)=>{
//     const collegeReqData = new CollegeModel(req.body);
//     console.log('collegeReqData update', collegeReqData);
//     // check null
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success: false, message: 'Please fill all fields'});
//     }else{
//         CollegeModel.updateCollege(req.params.id, collegeReqData, (err, college)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'College updated Successfully'})
//         })
//     }
// }

// // delete college
// exports.deleteCollege = (req, res)=>{
//     CollegeModel.deleteCollege(req.params.id, (err, college)=>{
//         if(err)
//         res.send(err);
//         res.json({success:true, message: 'College deleted successully!'});
//     })
// }