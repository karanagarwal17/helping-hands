import React from 'react'
import openSocket from 'socket.io-client'

class Chat extends React.Component {
  constructor(){

    super()

  }

  const socket = openSocket('http://localhost:8080')

  render(){
    return(

    )
  }
}

export default Chat
