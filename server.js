require('rootpath')();
var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');
var port = process.env.PORT || 1337;

// Database
var mongo = require('mongodb');
var monk = require('monk');
//var db = monk('admin:uakfvhhz@cluster0-shard-00-00-hollb.mongodb.net:27017,cluster0-shard-00-01-hollb.mongodb.net:27017,cluster0-shard-00-02-hollb.mongodb.net:27017/tasty?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var db = monk('localhost:27017/tasty');

var dishes = require('./routes/dishes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret })
    .unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

// routes
app.use('/login', require('./controllers/login.controller'));
app.use('/register', require('./controllers/register.controller'));
app.use('/app', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'));

// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});

// Make our db accessible to our router
app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.get('*', function (req, res) {
    res.redirect('/app');
});

app.set('port', process.env.PORT || 3000);

//start server
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});