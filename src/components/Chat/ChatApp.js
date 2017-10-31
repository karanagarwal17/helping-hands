import React from 'react'
import openSocket from 'socket.io-client'

import Message from './Message'

class ChatApp extends React.Component {
  constructor(props) {
    super()
    this.state = {
      input: '',
      messages: [
        {
          reply: true,
          text: "first message!"
        }, {
          reply: false,
          text: "second!"
        }
      ]
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this._handleMessageEvent = this._handleMessageEvent.bind(this)
  }

  componentDidMount() {
    this.socket = openSocket('http://localhost:3000')
    this._handleMessageEvent()
  }

  _handleMessageEvent() {
    this.socket.on('receive message', (inboundMessage) => {
      console.log("inboundMessage");
      var messages = this.state.messages
      messages.push({text: inboundMessage.message, reply: true})
      this.setState(messages: messages)
    })
  }

  handleOnChange(ev) {
    this.setState({input: ev.target.value})
  }

  handleOnSubmit(ev) {
    ev.preventDefault()
    this.socket.emit('send message', {message: this.state.input})
    var messages = this.state.messages
    messages.push({text: this.state.input, reply: false})
    this.setState({messages: messages})
    this.setState({input: ''})
  }

  render() {
    return (
      <div className="chat-container">
        <div className="chat-messages">
          <label>Chat</label>
          {
            this.state.messages.map((message, i) => {
              return (<Message key={i} reply={message.reply} text={message.text}/>)
            })
          }
        </div>
        <div className="sendmessage">
          <input type="text" placeholder="Send message..." onChange={this.handleOnChange} value={this.state.input}/>
          <button type="submit" id="send" onClick={this.handleOnSubmit}></button>
        </div>
      </div>
    )
  }
}

export default ChatApp
