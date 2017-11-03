var express=require("express");
var router=express.Router();
var Volunteer=require("../models/volunteer");
var Ngo=require("../models/ngo");
var Event=require("../models/Event");
var verify=require("./verify");

router.route("/")
.post(verify.verifyOrdinaryUser,function(req,res,next){
  console.log(req.body);
  if(req.body.type=="ngo"){
    Ngo.find({"org_name":req.body.name},function(err,docs){
      if(err) console.log(err);
        return res.json(docs);
    });
  }else if(req.body.type=="volunteer"){
    Volunteer.find({"firstname": req.body.name},function(err,docs){
      if(err) console.log(err);
        return res.json(docs);
    });
  }else if(req.body.type=="event"){
    Event.find({"name": req.body.name},function(err,docs){
      if(err) console.log(err);
        return res.json(docs);
    });
  }else{
    res.json({err:"invalid type"});
  }
});

module.exports=router;
