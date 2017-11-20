var express=require("express");
var router=express.Router();
var verify=require("./verify");
var Messages=require("../models/message")
var User=require("../models/User");

router.route("/")
.get(verify.verifyOrdinaryUser,function(req,res,next){
  //messages.find({$or:[{user1: req.decoded._doc._id},{user2: req.decoded._doc._id}]},function(err,docs){
  console.log(req.decoded);
  User.findById(req.decoded._doc._id).populate('friends').exec(function(err,docs){
    if(err){
      return res.json(err);
    }
    console.log(docs);
    return res.json(docs);
  });
});

router.route("/:id")
.get(verify.verifyOrdinaryUser, function(req, res, next){
  Messages.find({$and: [{user1: req.decoded._doc._id},{user2: req.params.id}]}, function(err, message){
    if(err){
      console.log(err);
    } else {
      if(message.length !== 0){
        res.status(200).json(message[0]);
      } else {
        Messages.find({$and: [{user1: req.params.id},{user2: req.decoded._doc._id}]}, function(err, message1){
          if(err){
            console.log(err);
          } else {
            console.log(message1);
            if(message1.length !== 0){
              res.status(200).json(message1[0]);
            } else {
              res.status(200).json([]);
            }
          }
        });
      }
    }
  });
});


module.exports=router;
