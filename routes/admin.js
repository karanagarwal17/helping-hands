var express = require('express');
var bodyParser=require("body-parser");
var router = express.Router();
var Verify=require("./verify");
var ngo=require("../models/ngo");

router.use(bodyParser.json());

router.route("/ngo")
  .get(Verify.verifyOrdinaryUser, Verify.verifyAdmin,function(req,res,next){
    ngo.find({approved:false},function(err,ngos){
      if(err){
        throw err;
      }
      res.json(ngos);
    });
  });

router.route("/ngo/accept")
  .post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    ngo.findOne({_id: req.body._id}, function(err, doc){
      if(err){
        throw err;
      }
      doc.approved = true;
      doc.save(function(err, doc){
        if (err) {
          throw err;
        }
        res.json("NGO Approved!")
      })
    })
  })

router.route("/ngo/reject")
  .post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    ngo.findByIdAndRemove(req.body._id, function (err, resp) {
      if (err){
        throw err;
      }
      res.json("NGO Deleted");
    });
  })


module.exports=router;
