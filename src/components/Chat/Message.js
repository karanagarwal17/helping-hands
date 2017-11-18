import React from 'react'

class Message extends React.Component {
  render(){
    return(
      <div className={ this.props.reply === true ? "message" : "message right"}>
        <div className="img">
        </div>
        <div className="bubble">
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Message
