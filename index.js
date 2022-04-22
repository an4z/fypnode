const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse request data content type application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// define root route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// import employee routes
const employeeRoutes = require('./src/routes/employee.route');
const collegeRoutes = require('./src/routes/college.route');
const studentRoutes = require('./src/routes/student.route');
const sectionRoutes = require('./src/routes/section.route');
const webuserRoutes = require('./src/routes/webuser.route');
const teacherRoutes = require('./src/routes/teacher.route');
const facultyRoutes = require('./src/routes/faculty.route');
const classroomRoutes = require('./src/routes/classroom.route');
const blockRoutes = require('./src/routes/block.route');
const scheduleRoutes = require('./src/routes/schedule.route');
const teacheruserRoutes = require('./src/routes/teacheruser.route');
const collegenoticeRoutes = require('./src/routes/collegenotice.route');
const deadlineRoutes = require('./src/routes/deadline.route');
const examsRoutes = require('./src/routes/exams.route');
const req = require('express/lib/request');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/college', collegeRoutes);
app.use('/api/v1/student', studentRoutes);
app.use('/api/v1/section', sectionRoutes);
app.use('/api/v1/webuser', webuserRoutes);
app.use('/api/v1/teacher', teacherRoutes);
app.use('/api/v1/faculty', facultyRoutes);
app.use('/api/v1/classroom', classroomRoutes);
app.use('/api/v1/block', blockRoutes);
app.use('/api/v1/schedule', scheduleRoutes);
app.use('/api/v1/teacheruser', teacheruserRoutes);
app.use('/api/v1/collegeNotice', collegenoticeRoutes);
app.use('/api/v1/deadline', deadlineRoutes);
app.use('/api/v1/exams', examsRoutes);

// listen to the port
app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});