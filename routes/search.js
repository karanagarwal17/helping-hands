var express=require("express");
var router=express.Router();
var Volunteer=require("../models/volunteer");
var Ngo=require("../models/ngo");
var Event=require("../models/Event");
var verify=require("./verify");

router.route("/")
.post(verify.verifyOrdinaryUser,function(req,res,next){
  if(req.body.type=="ngo"){
    Ngo.find({},function(err,docs){
      var results=docs.map(function(doc){
        if(doc.org_name.indexOf(req.body.name)!=-1){
          return doc;
        }
      });
      if(results.length==0){
        res.json({status:"No Results Found"});
      }else{
        return res.json(results);
      }
    });
  }else if(req.body.type=="volunteer"){
    Volunteer.find({},function(err,docs){
      var results=docs.map(function(doc){
        console.log(doc);
        if(doc.firstname.indexOf(req.body.name)!=-1){
          return doc;
        }
      });
      if(results.length==0){
        res.json({status:"No Results Found"});
      }else{
        return res.json(results);
      }
    });
  }else if(req.body.type=="event"){
    Event.find({},function(err,docs){
      var results=docs.map(function(doc){
        if(doc.name.indexOf(req.body.name)!=-1){
          return doc;
        }
      });
      if(results.length==0){
        res.json({status:"No Results Found"});
      }else{
        return res.json(results);
      }
    });
  }else{
    res.json({err:"invalid type"});
  }
});

module.exports=router;
