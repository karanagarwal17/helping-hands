import React from 'react'

import Dashboard from '../Dashboard'
import ChatApp from './ChatApp'

class Chat extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="col span-1-of-4">
          <Dashboard active={'chat'}/>
        </div>
        <div className="col span-3-of-4">
          <ChatApp />
        </div>
      </div>
    )
  }
}

export default Chat
