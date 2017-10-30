var express = require('express');
var router = express.Router();
var Verify = require("./verify");
var event = require("../models/event");

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
  event.create(req.body, function(err, doc) {
    if (err) {
      console.log(err);
      res.status(401).json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

router.route("/:id").put(Verify.verifyOrdinaryUser, function(req, res, next) {
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
