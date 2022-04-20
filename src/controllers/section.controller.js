
const SectionModel = require('../models/section.model');

// get all section list
exports.getSectionList = (req, res)=> {
    //console.log('here all sections list');
    SectionModel.getAllSections((err, sections) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Sections', sections);
        res.send(sections)
    })
}



// get section by ID
exports.getSectionByID = (req, res)=>{
    //console.log('get emp by id');
    SectionModel.getSectionByID(req.params.id, (err, section)=>{
        if(err)
        res.send(err);
        console.log('single section data',section);
        res.send(section);
    })
}

// create new section
exports.createNewSection = (req, res) =>{
    const sectionReqData = new SectionModel(req.body);
    console.log('sectionReqData', sectionReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        SectionModel.createSection(sectionReqData, (err, section)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Section Created Successfully', data: section.insertId})
        })
    }
}

// update section
exports.updateSection = (req, res)=>{
    const sectionReqData = new SectionModel(req.body);
    console.log('sectionReqData update', sectionReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        SectionModel.updateSection(req.params.id, sectionReqData, (err, section)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Section updated Successfully'})
        })
    }
}

// delete section
exports.deleteSection = (req, res)=>{
    SectionModel.deleteSection(req.params.id, (err, section)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Section deleted successully!'});
    })
}