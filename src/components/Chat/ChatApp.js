import React from 'react'
import openSocket from 'socket.io-client'

class ChatApp extends React.Component {
  constructor() {
    super()
    this.state = {
      response: false,
      endpoint: "http://localhost:3000"
    }

    this.addUsername = function(x) {
      var element = document.getElementById("chat-messages");
      var html = element.innerHTML;
      html += "<label class=\"left\">User: " + x + "</label>";
      element.innerHTML = html;
      element.scrollTop = element.scrollHeight;
    }

    // var sendMessage = function() {
    //   var msg = document.getElementById("message-content").value;
    //   document.getElementById("message-content").value = "";
    //   if (msg !== "") {
    //     socket.emit('new message', {
    //       roomId: id,
    //       message: msg,
    //       username: username
    //     });
    //   }
    // }
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = openSocket(endpoint)

    socket.on('message created', function(data) {
      console.log(data);
      if (data.username == username) {
        addMessage(data.message);
      } else {
        addUsername(data.username);
        addReply(data.message);
      }
    });

    socket.on('setup', function(data) {
      socket.emit('new user', {
        roomId: id,
        username: username
      });
    });

  }

  render() {
    return (
      <div className="chat-container">
        <div id="chat-messages">
          <label>Chat</label>
        </div>
        <div id="sendmessage">
          <input type="text" placeholder="Send message..." id="message-content"/>
          <button type={'submit'} id="send" onclick="sendMessage()"></button>
        </div>
      </div>
    )
  }
}

export default ChatApp
