var express = require('express');
var router = express.Router();
var Verify = require("./verify");
var event = require("../models/Event");
var ngo = require('./ngo');

router.route("/")
.get(Verify.verifyOrdinaryUser, function(req, res, next) {
  event.find({}, function(err, events) {
    if (err) {
      console.log(err);
      res.status(401).json(err);
    } else {
      res.status(200).json(events);
    }
  });
})
.post(Verify.verifyOrdinaryUser, function(req, res, next) {
  console.log('1');
  ngo.findOne({_id: req.decoded._doc.ngoId}, function(err, ngo_doc){
    if (err) {
      console.log(err);
      res.status(401).json(err);
    } else {
      console.log('1');
      event.create(req.body, function(err, event_doc) {
        if (err) {
          console.log(err);
          res.status(401).json(err);
        } else {
          ngo_doc.events.push(event_doc._id);
          ngo_doc.save(function(err, doc){
            res.status(200).json(doc);
          });
        }
      });
    }
  });
});

router.route("/:id")
.put(Verify.verifyOrdinaryUser, function(req, res, next) {
  event.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, {
    new: true
  }, function(err, doc) {
    if (err) {
      console.log(err);
      res.status(401).json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

module.exports = router;
