var jwt=require("jsonwebtoken");
var User=require("../models/User");

exports.getToken=function(user){
  return jwt.sign(user, process.env.secretKey,{
    expiresIn:3600
  });
};

exports.verifyOrdinaryUser = function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, process.env.secretKey, function (err, decoded) {
            if (err) {
                var err = new Error('You are not authenticated!');
                err.status = 401;
                return next(err);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        var err = new Error('No token provided!');
        err.status = 403;
        return next(err);
    }
};


exports.verifyAdmin=function(req,res,next){
  console.log(req.decoded);
  if(req.decoded._doc.admin){
    console.log("true");
    return next();
  }else{
    var err = new Error("you do not have admin privileges");
    err.status=401;
    return next(err);
  }
}

exports.verifyVolunteer=function(req,res,next){
  console.log(req.decoded);
  if(req.decoded._doc.volunteer){
    console.log("true");
    return next();
  }else{
    var err = new Error("you do not have volunteer privileges");
    err.status=401;
    return next(err);
  }
}

exports.verifyNgo=function(req,res,next){
  console.log(req.decoded);
  if(req.decoded._doc.ngo){
    console.log("true");
    return next();
  }else{
    var err = new Error("you do not have ngo privileges");
    err.status=401;
    return next(err);
  }
}
