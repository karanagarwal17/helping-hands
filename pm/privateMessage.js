module.exports=function(io){

  io.on("connection",function(socket){
    console.log("connected to socket successfully");

    socket.on('send message', function(data){
      console.log(data);

      io.emit('receive message',data);
    })
  })
}
