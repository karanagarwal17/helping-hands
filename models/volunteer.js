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

      date_of_birth:String,

      address:{
        street_adderss: String,
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
