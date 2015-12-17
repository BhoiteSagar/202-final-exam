var express = require("express");
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'ec2-54-175-190-176.compute-1.amazonaws.com',
  user     : 'root',
  password : 'sagar',
  database : 'finalexam'
});

connection.connect();

connection.query('SELECT * from gumball where id=1', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log(err);
});

connection.end();

app.listen(process.env.PORT);
console.log("Server running on port: " + process.env.PORT);