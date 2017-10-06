var express = require('express');
var bodyParser=require("body-parser");
var router = express.Router();
var Verify=require("./verify");
var ngo=require("../models/ngo");

router.use(bodyParser.json());
router.route("/")
.get(Verify.verifyOrdinaryUser,function(req,res,next){
  ngo.find({},function(err,ngos){
    if(err){
      throw err;
    }
    res.json(ngos);
  });
})

.post(Verify.verifyOrdinaryUser,function(req,res,next){
  ngo.create(req.body,function(err,Ngo){
    if(err){
      throw err;
    }
    res.json(Ngo);
  });
});

router.route("/:id")
.put(Verify.verifyOrdinaryUser, function(req,res,next){
  ngo.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true},function(err,dish){
    if(err){
      throw err;
    }
    res.json(dish);
  });
});
module.exports=router;
