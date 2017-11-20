var express = require('express');
var bodyParser=require("body-parser");
var router = express.Router();
var Verify=require("./verify");
var ngo=require("../models/ngo");
var donation=require("../models/donation");
var volunteer=require("../models/volunteer");
router.use(bodyParser.json());
router.route("/")
.get(Verify.verifyOrdinaryUser,function(req,res,next){
  ngo.findOne({"_id":req.decoded._doc.ngoId},function(err,ngos){
    if(err){
      throw err;
    }
    res.json(ngos);
  });
})

.post(Verify.verifyOrdinaryUser,function(req,res,next){
  ngo.findOneAndUpdate({"_id":req.decoded._doc.ngoId}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.json({status:"succesfully saved",ngo:doc});
  });
});

router.route("/donation")
.get(Verify.verifyOrdinaryUser,function(req,res,next){
  if(req.decoded._doc.ngo){
    ngo.findOne({_id:req.decoded._doc.ngoId}).populate("donations").exec(function(err,events){
      res.status(200).json(events);
    });
  }else{
    volunteer.findOne({_id:req.decoded._doc.volunteerId}).populate("donations").exec(function(err,events){
      res.status(200).json(events);
    });
  }
});

router.route("/:id")
.get(Verify.verifyOrdinaryUser, function(req,res,next){
  ngo.findOne({"_id": req.params.id}, function(err, ngos){
    if(err){
      console.log(err);
      res.status(401).json(err);
    } else {
      res.json(ngos);
    }
  })
})
.put(Verify.verifyOrdinaryUser, function(req,res,next){
  ngo.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true},function(err,dish){
    if(err){
      throw err;
    }
    res.json(dish);
  });
});

router.route("/donation/:ngoid")
.post(Verify.verifyOrdinaryUser,function(req,res,next){
  var donate=new donation(req.body);
  donate.created_by=req.decoded._doc._id;
  donate.ngo_id=req.params.ngoid;
  donate.save(function(err,d){
    if(err){
      console.log(err);
    }else{
      ngo.findOne({_id:req.params.ngoid},function(err,n){
        console.log(d);
        n.donations.push(d._id);
        n.save();
      });
      volunteer.findOne({_id:req.decoded._doc.volunteerId},function(err,v){
        v.donations.push(d._id);
        v.save();
      });
      res.json({success:true});
    }
  });
});

router.route("/events/:id")
.get(Verify.verifyOrdinaryUser,function(req,res,next){
  ngo.findOne({_id:req.params.id}).populate("events").exec(function(err,events){
    res.status(200).json(events);
  });
});

module.exports=router;
