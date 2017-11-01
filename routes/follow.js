var express=require("express");
var router=express.Router();
var verify=require("./verify");
var Ngo=require("../models/ngo");
var Volunteer=require("../models/volunteer");

router.route("/")
.post(verify.verifyOrdinaryUser,function(req,res,next){
  Ngo.findById(req.body.id,function(err,ngo){
    if(err){
      res.json(err);
    }else{
      //console.log(ngo);
      if(ngo.followers.indexOf(req.decoded._doc.volunteerId)==-1){
        ngo.followers.push(req.decoded._doc.volunteerId);
        ngo.save(function(err,n){
          if(err){
            return res.json(err);
          }
          console.log(req.decoded._doc);
          Volunteer.findById(req.decoded._doc.volunteerId,function(err,vol){
            if(err){
              res.json(err);
            }
            vol.following.push(req.body.id);
            vol.save(function(err,v){
              if(err){
                return res.json(err);
              }
              res.json({status:"saved successfully"});
            });
          })
        });
      }else{
        ngo.followers.splice(ngo.followers.indexOf(req.decoded._doc._id),1);
        ngo.save(function(err,n){
          if(err){
            return res.json(err);
          }
          Volunteer.findById(req.decoded._doc.volunteerId,function(err,vol){
            vol.following.splice(vol.following.indexOf(req.body.id),1);
            vol.save(function(err,v){
              if(err){
                return res.json(err);
              }
              res.json({status:"removed successfully"});
            });
          });
        });
      }
    }
  })
})


module.exports=router;
