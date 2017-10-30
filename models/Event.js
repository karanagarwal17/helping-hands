var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var event = new Schema({
  Name: String,
  Type: String,
  Date: String,
  Venue: String,
  Description: String,
});

var event = mongoose.model("event", event);
module.exports = event;
