var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "procard123",
  database: "loginapp"
});

con.connect(function (err) {
  if (err) {
    console.log('Error connection Database', err);
    return;
  } else {
    console.log('DataBase is conected 🔌')
  }
});

module.exports = con;