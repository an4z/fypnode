const mysql = require('mysql');

// create here mysql connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api'
});

// const dbConn = mysql.createConnection({
//     host: 'taalika.chbkfqrbx6yy.ap-south-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'mypassword',
//     database: 'taalika'
// });

// const dbConn = mysql.createConnection({
//     host: 'localhost',
//     user: 'taalikaa_anuz',
//     password: 'Burner123!@',
//     database: 'taalikaa_database'
// });

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = dbConn;
