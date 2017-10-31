var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var event = new Schema({
  name: String,
  type: String,
  date: String,
  venue: String,
  description: String,
});

var event = mongoose.model("event", event);
module.exports = event;
