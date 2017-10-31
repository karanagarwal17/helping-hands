var express = require('express');
var bodyParser=require("body-parser");
var router = express.Router();
var Verify=require("./verify");
var volunteer=require("../models/volunteer");
router.use(bodyParser.json());

router.route("/")
.get(Verify.verifyOrdinaryUser,function(req,res,next){
  volunteer.findOne({"_id": req.decoded._doc.volunteerId},function(err,volunteers){
    if(err){
      throw err;
    }
    res.json(volunteers);
  });
})

.post(Verify.verifyOrdinaryUser,function(req,res,next){
  volunteer.findOneAndUpdate({"_id":req.decoded._doc.volunteerId}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.json({status:"succesfully saved",volunteer:doc});
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
