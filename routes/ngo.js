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
  ngo.findOneAndUpdate({"_id":req.decoded._doc.ngoId}, req.body, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.json({status:"succesfully saved",ngo:doc});
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
