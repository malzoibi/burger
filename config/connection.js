var mysql = require('mysql'); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "malakeh95",
    database: "burgers_db"
}); 

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + error.stack);
        return; 
    }
    console.log("connected as id " + connection.threadId); 
});

module.exports = connection; 