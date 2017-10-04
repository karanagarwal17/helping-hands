var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var passportLocalMongoose=require("passport-local-mongoose");
var UserSchema=new Schema({
  username:String,
  password:String,
  firstname:{
    type:String,
    default:""
  },
  lastname:{
    type:String,
    default:""
  },
  admin:{
    type:Boolean,
    default:false
  },
  volunteer:{
    type:Boolean,
    default:false
  },
  ngo:{
    type:Boolean,
    default:false
  }
});

UserSchema.plugin(passportLocalMongoose);
var User=mongoose.model("User",UserSchema);
module.exports=User;
