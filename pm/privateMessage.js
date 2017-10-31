var messages=require("../models/message");
var User=require("../models/User");
module.exports=function(io){

  io.on("connection",function(socket){
    console.log("connected to socket successfully");

    socket.on("join",function(room){
      socket.join(room);
    });

    socket.on('send message', function(data){
      console.log(data);
      if(messages.find({$and:[{user1: data.user1Id},{user2: data.user2Id}]})){
        messages.find({user1:data.user1Id},function(err,Message){
          var msg={
            content:data.message
          }
          Message.messages.push(msg);
        });
      }else if(messages.find({$and:[{user1: data.user2Id},{user2: data.user1Id}]})){

      }else{
        var msg=new messages();
        msg.user1=data.user1Id;
        msg.user2=data.user2Id;
        var text={
          content:data.message
        }
        msg.messages.push(text);
        msg.save();
        User.findByIdAndUpdate(data.user1Id,{$set:{}},{new:true},function(err,dish){
          if(err){
            throw err;
          }
          res.json(dish);
        });
      }
      io.to(data.user2Id).emit('receive message',data);
    })
  })
}
