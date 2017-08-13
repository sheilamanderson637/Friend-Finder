// Node SQL module
// ============================================================
var mysql = require('mysql');

// SQL Connection
// ============================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "friend-finder_db"
});

module.exports = function(app) {
    app.get('/api/friends', function (req, res) {
        connection.query('SELECT * FROM friends', function(err, response){
            if(err) throw err;
            res.send(response);
        });
    });
};

// module.exports = function(app){

//   app.get('/api/friends', function (req, res) {
//     connection.query('SELECT * FROM friends', function(err, response){
//       if(err) throw err;
//       res.send(response);
//     }
//   }
// };