import React from 'react'
import openSocket from 'socket.io-client'
import agent from '../../agent'
import { connect } from 'react-redux'

import {
  LOAD_CHAT_HISTORY
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.chat,
  currentUser: state.common.currentUser,
  messages: state.chat.messages
})

const mapDispatchToProps = dispatch => ({
  onLoad: (id) =>
    dispatch({ type: LOAD_CHAT_HISTORY, payload: agent.Chat.getMessages(id) })
})

import Message from './Message'

class ChatApp extends React.Component {
  componentWillMount(){
    if(this.props.params.id){
      this.props.onLoad(this.props.params.id)
    }
  }

  compoentWillRecieveProps(nextProps){
    if(nextProps.params.id){
      this.props.onLoad(nextProps.params.id)
    }
    this.setState({messages: nextProps.messages})
  }

  constructor(props) {
    super()
    this.state = {
      input: '',
      messages: []
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
    this.socket.on('connect', () => {
      this.socket.emit('join', this.props.currentUser._id);
    })

    this.socket.on('receive message', (inboundMessage) => {
      console.log("inboundMessage");
      var messages = this.state.messages
      messages.push({text: inboundMessage.message, reply: true})
      this.setState(messages : messages)
    })
  }

  handleOnChange(ev) {
    this.setState({input: ev.target.value})
  }

  handleOnSubmit(ev) {
    ev.preventDefault()
    this.socket.emit('send message', {message: this.state.input, user1Id: this.props.currentUser._id, user2Id: this.props.params.id})
    var messages = this.state.messages
    messages.push({text: this.state.input, reply: false})
    this.setState({messages: messages})
    this.setState({input: ''})
  }

  render() {
    return (
      <div className="chat-container box">5a108a3436972c6567e3f1d0
        <div className="user-details">
          <div className="user-image">
            <img src="img/girl1.jpg" alt="avatar"/>
          </div>
          <div className="about">
            <div className="name">Aiden Chavez</div>
          </div>
        </div>
        <div className="chat-messages">
          {
            this.state.messages.map((message, i) => {
              return (
                <Message key={i} reply={message.reply} text={message.text} />
              )
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp)
