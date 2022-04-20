
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