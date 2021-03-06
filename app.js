var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require("mongoose");
var passport=require("passport");
var cors = require("cors");
var localStrategy=require("passport-local").Strategy;
require('dotenv').config();

var admin = require('./routes/admin');
var chat=require("./routes/chat");
var event = require("./routes/event");
var file = require('./routes/file');
var follow=require("./routes/follow");
var ngo=require("./routes/ngo");
var search=require("./routes/search");
var users = require('./routes/users');
var volunteer=require("./routes/volunteer");

if(process.env.environment === 'development'){
	mongoose.connect('mongodb://localhost:27017/connecting-social-organisations',function(){
		console.log("connected to database");
	});
}
else {
	mongoose.connect(process.env.mongoUrl);
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once("open",function(){
  console.log("Server started successfully!!");
});

var app = express();
app.use(cors());

var User=require("./models/User");
app.use(passport.initialize());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/admin',admin);
app.use("/api/chat",chat);
app.use('/api/event',event);
app.use('/api/file',file);
app.use("/api/follow",follow);
app.use('/api/ngo',ngo);
app.use("/api/search",search);
app.use('/api/users', users);
app.use('/api/volunteer',volunteer);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});


module.exports = app;
