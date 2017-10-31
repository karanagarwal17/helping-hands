import React from 'react'

import User from './User'

class UserList extends React.Component {
  render() {
    return (
      <div className="chat-users box">
        <div className="title">
          Chat
        </div>
        <div className="userlist">
          <ul>
            <User/>
            <User/>
            <User/>
            <User/>
          </ul>
        </div>
      </div>
    )
  }
}

export default UserList
