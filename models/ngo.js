var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var ngo=new Schema({

      org_name:{
        type:String,
        unique:true
      },
      head_name:{
        type:String
      },
      gender:String,
      email:String,
      phone_number:String,
      category:String,

      approved:{
        type:Boolean,
        default:false
      },

      address:{
        house_no:String,
        landmark:String,
        city:String,
        district:String,
        state:String,
        pincode:String
      },

      bank_details:{
        account_holder:String,
        account_no:String,
        bank_name:String,
        branch_name:String,
        branch_city:String,
        ifsc_code:String
      },

      registration_details:{
        registration_number:String,
        identity_proof:String,
        valid_from:Date,
        valid_to:Date
      }



});

var ngo=mongoose.model("ngo",ngo);
module.exports=ngo;
