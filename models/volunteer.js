var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var volunteer=new Schema({

      firstname:{type:String,default:""},

      lastname:String,

      gender:String,

      email:String,

      phone_number:String,

      profession:String,

      city:String,

      date_of_birth:String,

      address:{
        street_address: String,
        city:String,
        district:String,
        state:String,
        pincode:String
      },

      created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      },

      following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      }],

      donations:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"donation"
      }],
      
      events:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'event'
      }]

});

var volunteer=mongoose.model("volunteer",volunteer);
module.exports=volunteer;
