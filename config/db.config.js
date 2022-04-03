const mysql = require('mysql');

// create here mysql connection

// const dbConn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'api'
// });

const dbConn = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6483256',
    password: 'QhMrAePMA9',
    database: 'sql6483256'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = dbConn;
