var mongoose=require("mongoose");
var schema=mongoose.Schema;
var messageSchema=new schema({
  content:{
    type:String,
    default:""
  },
  reply:{
    type:Boolean,
    default:false
  }
},
{
  timestamps:true
});

var message=new schema({
  messages:[messageSchema],
  user1:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  user2:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
},
{
  timestamps:true
});

module.exports=mongoose.model("message",message);
