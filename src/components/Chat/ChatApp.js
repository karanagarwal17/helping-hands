import React from 'react'
import openSocket from 'socket.io-client'
import agent from '../../agent'
import { connect } from 'react-redux'

import {
  CHAT_LOADED,
  LOAD_CHAT_HISTORY,
  LOAD_CHAT_USER
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.chat,
  currentUser: state.common.currentUser,
  messages: state.chat.messages
})

const mapDispatchToProps = dispatch => ({
  onLoad: (id) =>
    dispatch({ type: CHAT_LOADED }),
  onChat: (id) => {
    dispatch({ type: LOAD_CHAT_HISTORY, payload: agent.Chat.getMessages(id) })
    dispatch({ type: LOAD_CHAT_USER, payload: agent.User.get(id) })
  }
})

const User = props => {
  if(props.props.chatUser){
    return(
      <div className="user-details">
        <div className="user-image">
          <img src="img/user.png" alt="avatar"/>
        </div>
        <div className="about">
          <div className="name">{props.props.chatUser.username}</div>
        </div>
      </div>
    )
  } else {
    return(
      <div className="user-details">
        <div className="user-image">
          <img src="" alt=""/>
        </div>
        <div className="about">
          <div className="name"></div>
        </div>
      </div>
    )
  }
}

import Message from './Message'

class ChatApp extends React.Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.params.id && (this.state.url === null || nextProps.params.id !== this.state.url)){
      this.props.onLoad()
      this.setState({messages: null})
      this.setState({url: nextProps.params.id})
      this.props.onChat(nextProps.params.id)
    }
    if(this.state.url && nextProps.params.id === undefined){
      this.props.onLoad()
      this.setState({url: null, messages: null})
    }
    if(nextProps.message){
      var oldm = nextProps.message.messages
      var newm = []
      var i
      var correct
      if(nextProps.message.user1 === this.props.currentUser._id){
        correct = true
      } else {
        correct = false
      }
      for(i=0; i < oldm.length; i++){
        if(correct){
          newm.push({text: oldm[i].content, reply: oldm[i].reply})
        } else {
          newm.push({text: oldm[i].content, reply: !oldm[i].reply})
        }
      }
      this.setState({messages: newm})
    }
  }

  constructor(props) {
    super()
    this.state = {
      input: '',
      messages: null,
      url: null
    }

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this._handleMessageEvent = this._handleMessageEvent.bind(this)
  }

  componentDidMount() {
    this.socket = openSocket('http://localhost:3000')
    //this.socket = openSocket('https://helping-hands.au-syd.mybluemix.net')
    this._handleMessageEvent()
  }

  _handleMessageEvent() {
    this.socket.on('connect', () => {
      this.socket.emit('join', this.props.currentUser._id);
    })

    this.socket.on('receive message', (inboundMessage) => {
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
    if(this.state.messages){
      return (
        <div className="chat-container box">
          <User props={this.props}/>
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
    } else {
      return (
        <div className="chat-container box">
          <User props={this.props}/>
          <div className="chat-messages">
          </div>
          <div className="sendmessage">
            <input type="text" placeholder="Send message..." onChange={this.handleOnChange} value={this.state.input}/>
            <button type="submit" id="send" onClick={this.handleOnSubmit}></button>
          </div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp)
