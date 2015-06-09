var port = process.env.PORT;
console.log('using port ' + port)

// Include Express
var express = require('express');

var bodyParser = require('body-parser');

//include user controller
var user = require('./controller/user');

//include for authentication token
//npm install express-jwt --save
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var secret = 'Dontsharethiss3cr37';
exports.secret=secret;

// Create a new Express application
var app = express();
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//use jwt auth token
app.use(expressJwt({ secret: secret}).unless({path: ['/api/login']}));

// Add a basic route – index page


app.get('/', function (req, res) {
    res.json({message: 'hello'});
});

app.post('/api/login', user.login);

//test auth method
app.get('/api/restricted', function (req, res) {
  console.log('user ' + req.user.username + ' is calling /api/restricted');
  res.json({
    name: 'foo',
    message: 'hello '+req.user.username,
    details: req.user
  });
});


// Bind to a port
app.listen(port);
console.log('Worker  running!');

var oracledb = require('oracledb');

oracledb.getConnection(
    {
      user          : "Yoga",
      password      : "Welcome1#",
      connectString : "opc.opcau.com:1521/yogapdb.auoracle84096.oraclecloud.internal"
    },
    function(err, connection)
    {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute(
          "SELECT * "
          + "FROM Users "
          //+ "WHERE department_id = :did"
          ,
          //[180],
          function(err, result)
          {
            if (err) {
              console.error(err.message);
              return;
            }
            console.log(result.rows);
          });
    });
