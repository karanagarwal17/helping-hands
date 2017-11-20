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

router.route("/events")
.get(Verify.verifyOrdinaryUser,function(req,res,next){
  volunteer.findOne({_id:req.decoded._doc.volunteerId}).populate("events").exec(function(err,events){
    res.status(200).json(events);
  });
});

router.route("/:id")
.get(Verify.verifyOrdinaryUser, function(req,res,next){
  volunteer.findOne({"_id": req.params.id}, function(err, volunteers){
    if(err){
      console.log(err);
      res.status(401).json(err);
    } else {
      res.json(volunteers);
    }
  })
})
.put(Verify.verifyOrdinaryUser, function(req,res,next){
  volunteer.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true},function(err,Volunteer){
    if(err){
      throw err;
    }
    res.json(Volunteer);
  });
});

router.route("/apply/:id")
.post(Verify.verifyOrdinaryUser, function(req,res,next){
  console.log(req.decoded);
  volunteer.findOne({_id: req.decoded._doc.volunteerId}, function(err, v){
    if(err){
      console.log(err);
      res.status(401).json(err);
    } else {
      v.events.push(req.params.id);
      v.save(function(err,doc){
        if(err){
          console.log(err);
        }else{
          res.json(doc);
        }
      });
    }
  });
});



module.exports=router;
