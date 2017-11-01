var Messages=require("../models/message");
var User=require("../models/User");
module.exports=function(io){

  io.on("connection",function(socket){
    console.log("connected to socket successfully");

    socket.on("join",function(room){
      console.log(room);
      socket.join(room);
    });

    socket.on('send message', function(data){
      console.log(data);
      if(Messages.find({$and:[{user1: data.user1Id},{user2: data.user2Id}]})){
        console.log("this");
        Messages.findOne({user1:data.user1Id},function(err,Message){
          var msg={
            content:data.message
          }
          Message.messages.push(msg);
          Message.save(function(err,m){
            if(err){
              res.json(err);
            }else{
              res.json(m);
            }
          })
          console.log(Message.messages);
        });
      }else if(messages.find({$and:[{user1: data.user2Id},{user2: data.user1Id}]})){
        var msg={
          content:data.message,
          reply:true
        }
        Message.messages.push(msg);
        Message.save(function(err,m){
          if(err){
            res.json(err);
          }else{
            res.json(m);
          }
        })
        console.log(Message.messages);
      }else{
        var msg=new messages();
        msg.user1=data.user1Id;
        msg.user2=data.user2Id;
        var text={
          content:data.message
        }
        msg.save(function(err,m){
          if(err){
            res.json(err);
          }else{
              m.messages.push(text);
              m.save();
          }
        });
        User.findById(data.user1Id,function(err,user){
          if(err){
            throw err;
          }
          user.friends.push(data.user2Id);
          user.save();
        });
        User.findById(data.user2Id,function(err,user){
          if(err){
            throw err;
          }
          user.friends.push(data.user1Id);
          user.save();
        });
      }
      io.to(data.user2Id).emit('receive message',data);
    })
  })
}
