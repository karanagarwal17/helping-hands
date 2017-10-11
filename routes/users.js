var express = require('express');
var router = express.Router();
var passport = require("passport");
var User = require("../models/User");
var Verify = require("./verify");
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
  User.register(new User({username: req.body.username}), req.body.password, function(err, User) {
    console.log(User);
    if (err) {
      return res.status(401).json({err: err});
    } else {
      if (req.body.usertype === 'volunteer') {
        User.volunteer = true;
      } else if (req.body.usertype === 'ngo') {
        User.ngo = true;
      } else {
        res.status(401).json({err: {message: 'Please select a usertype'}});
      }
      User.save(function(err, user) {
        if (err) {
          res.status(401).json({err: err});
          throw err;
        }
        passport.authenticate("local")(req, res, function() {
          return res.status(200).json({status: "Registration successful", user: user});
        });
      });
    }
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
