var mongoose=require("mongoose");
var schema=mongoose.Schema;

var message=new schema({
  message:{
    type:String,
    default:""
  },
  sender:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  reciever:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  senderName:{
    type:String
  },
  recieverName:{
    type:String
  }
},
{
  timestamps:true
});

module.exports=mongoose.model("message",message);
