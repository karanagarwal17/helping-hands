var express = require('express');
var bodyParser=require("body-parser");
var router = express.Router();
var Verify=require("./verify");
var volunteer=require("../models/volunteer");
router.use(bodyParser.json());

router.route("/")
.get(Verify.verifyOrdinaryUser,function(req,res,next){
  volunteer.find({},function(err,volunteers){
    if(err){
      throw err;
    }
    res.json(volunteers);
  });
})

.post(Verify.verifyOrdinaryUser,function(req,res,next){
  volunteer.create(req.body,function(err,Volunteer){
    if(err){
      throw err;
    }
    Volunteer.created_by=req.decoded._doc._id;
    Volunteer.save(function(err,vol){
      res.json(vol);
    })

  });
});

router.route("/:id")
.put(Verify.verifyOrdinaryUser, function(req,res,next){
  volunteer.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true},function(err,Volunteer){
    if(err){
      throw err;
    }
    res.json(Volunteer);
  });
});
module.exports=router;
