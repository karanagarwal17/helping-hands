var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var volunteer=new Schema({

      firstname:String,

      lastname:String,

      gender:String,

      email:String,

      phone_number:String,

      profession:String,

      city:String,

      address:{
        house_no:String,
        landmark:String,
        city:String,
        district:String,
        state:String,
        pincode:String
      },

      created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      }

});

var volunteer=mongoose.model("volunteer",volunteer);
module.exports=volunteer;
