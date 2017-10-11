var express = require('express');
var router = express.Router();
var passport = require("passport");
var User = require("../models/User");
var Verify = require("./verify");
var jwt=require("jsonwebtoken");
var request=require("request");
/* GET users listing. */
router.route("/").get(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      throw err;
    } else {
      res.json(users);
    }
  });
});

router.post("/register", function(req, res, next) {
  console.log(req.body);
  User.register(new User({username: req.body.username}), req.body.password,function(err, user) {
    //User.findOne({ username: req.body.username }, function(err, User) {});
    if(req.body.email){
      user.email=req.body.email;
      user.save(function(err,User){
          if(err){
            throw err;
          }
        });
    }
    if (err) {
      return res.status(401).json({err: err});
    } else {
      if (req.body.usertype === 'volunteer') {
        user.volunteer = true;
      } else if (req.body.usertype === 'ngo') {
        user.ngo = true;
      } else {
        res.status(401).json({err: {message: 'Please select a usertype'}});
      }
      user.save(function(err, user) {
        if (err) {
          res.status(401).json({err: err});
          throw err;
        }
        passport.authenticate("local")(req, res, function() {

          var token=jwt.sign({email:user.email,username:user.name},process.env.secretKey,{expiresIn:'1d'});
          user.temporarytoken=token;
          user.save(function(err,user){
            if(err)
            throw err;
          });
          console.log(user);
          const options = {
            url: 'https://desolate-reef-80675.herokuapp.com/email/confirmation',
            method: 'POST',
            body:{
              "to":user.email,
              "subject":"complete your registration on helping hands",
              "key":process.env.key,
              "message":"hello "+ user.username + ", please go to the following link to complete your registration "+
              "http://localhost:3000/api/users/activation/"+user.temporarytoken+""
            },
            json:true
          };

          request(options, function(err, res, body) {
            // let json = JSON.parse(body);
            console.log(err);
          });


          return res.status(200).json({status: "Registration successful", user: user});
        });
      });
    }
  });
});

router.get("/activation/:token",function(req,res,next){
  User.findOne({temporarytoken:req.params.token},function(err,user){
    if(err){
      throw err;
    }
    console.log(user);
    var token=req.params.token;

    if(!user){
        return res.json({status:"invalid user "});
    }

      jwt.verify(token, process.env.secretKey, function (err, decoded) {
          if (err) {
              var err = new Error('token has expired');
              err.status = 401;
              return next(err);
          }
           else {

            User.update({temporarytoken:token}, {$set: { active: true,temporarytoken:"" }}, function(err){
              if(err){
                throw err;
              }

              const options = {
                url: 'https://desolate-reef-80675.herokuapp.com/email/confirmation',
                method: 'POST',
                body:{
                  "to":user.email,
                  "subject":"registration process completed on helping hands",
                  "key":process.env.key,
                  "message":"your registration process has been completed on helping hands "+
                   "now you are an active member on helping hands and can enjoy eveery facility available over the website."
                },
                json:true
              };

              request(options, function(err, res, body) {
                  // let json = JSON.parse(body);
                  console.log(res);
                });

              res.json({status:"registration process completed"});
            });
          }
      });

  });
});


router.post("/login", function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      res.status(401).json({err : err});
      return next(err);
    } else {
      if (!user) {
        return res.status(401).json({err: info});
      } else {
        req.logIn(user, function(err) {
          if (err) {
            return res.status(401).json({err: "could not log In"});
          } else {
            console.log("user in users: ", user);
            var token = Verify.getToken(user);
            res.status(200).json({status: "login successful", success: true, token: token, user: user});
          }
        });
      }
    }
  })(req, res, next);
});

router.get("/logout", function(req, res, next) {
  req.logout();
  res.status(200).json({status: "logout successful"});
});

module.exports = router;
