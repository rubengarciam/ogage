var port = process.env.PORT;


// Include Express
var express = require('express');

var bodyParser = require('body-parser');

//include user controller
var user = require('./controller/user');

// Create a new Express application
var app = express();

// parse application/json
app.use(bodyParser.json());

// Add a basic route – index page


app.get('/', function (req, res) {
    res.json({message: 'hello'});
});


app.post('/api/login', user.login);


// Bind to a port
app.listen(port);
console.log('Worker  running!');
