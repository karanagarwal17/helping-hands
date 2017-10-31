var express=require("express");
var router=express.Router();
var verify=require("./verify");
var messages=require("../models/message")
var User=require("../models/User");

router.route("/")
.get(verify.verifyOrdinaryUser,function(req,res,next){
  //messages.find({$or:[{user1: req.decoded._doc._id},{user2: req.decoded._doc._id}]},function(err,docs){
  User.findById(req.decoded._doc._id).populate(friends).exec(function(err,docs){
    if(err){
      return res.json(err);
    }
    return res.json(docs);
  });
});


module.exports=router;
