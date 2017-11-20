var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var donation=new Schema({

      type:String,

      phone_number:String,

      address:{
        street_address: String,
        city:String,
        district:String,
        state:String,
        pincode:String
      },

      ngo_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ngo'
      },

      created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      }

});

module.exports=mongoose.model("donation",donation);
