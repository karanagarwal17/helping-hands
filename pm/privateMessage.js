var Messages = require("../models/message");
var User = require("../models/User");

module.exports = function(io) {

  io.on("connection", function(socket) {
    console.log("connected to socket successfully");

    socket.on("join", function(room) {
      socket.join(room);
      console.log(room);
    });

    socket.on('send message', function(data) {
      console.log(data);
      Messages.find({
        $and: [
          {
            user1: data.user1Id
          }, {
            user2: data.user2Id
          }
        ]
      }, function(err, message) {
        console.log(message);
        if (message.length !== 0) {

          console.log("this" + message);
          var msg = {
            content: data.message
          }
          message[0].messages.push(msg);
          message[0].save(function(err, m) {
            if (err) {
              console.log(err);
            }
          });
        } else {
          Messages.find({
            $and: [
              {
                user1: data.user2Id
              }, {
                user2: data.user1Id
              }
            ]
          }, function(err, message1) {
            console.log(message1);
            if (message1.length !== 0) {
              var msg = {
                content: data.message,
                reply: true
              }
              message1[0].messages.push(msg);
              message1[0].save(function(err, m) {
                if (err) {
                  console.log(err);
                }
              });
            } else {
              var msg = new Messages();
              msg.user1 = data.user1Id;
              msg.user2 = data.user2Id;
              var text = {
                content: data.message
              }
              msg.messages.push(text);
              msg.save(function(err, m) {
                if (err) {
                  console.log(err);
                }
              });
              User.findById(data.user1Id, function(err, user) {
                if (err) {
                  throw err;
                }
                user.friends.push(data.user2Id);
                user.save();
              });
              User.findById(data.user2Id, function(err, user) {
                if (err) {
                  throw err;
                }
                user.friends.push(data.user1Id);
                user.save();
              });

            }
          });

        }

        io.to(data.user2Id).emit('receive message', data);
      });

    });
  });
}
