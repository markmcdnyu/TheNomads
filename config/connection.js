/* // Connection to mysql database and JAWSDB

var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "nnmeqdrilkem9ked.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "z5bqmbn245xdlnx3",
        password: "pasbyqo9xgduncyz8n1sword",
        database: "y1nc4nmj0ek9nsnd",
    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection; */