import React from 'react'
import { connect } from 'react-redux'
import agent from './../../agent'

import User from './User'
import {
  LOAD_USER_LIST
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.chat,
  currentUser: state.common.currentUser,
  userList: state.chat.userList
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: LOAD_USER_LIST, payload: agent.Chat.get() })
})

class UserList extends React.Component {
  componentWillMount(){
    this.props.onLoad()
  }

  render() {
    console.log(this.props.userList)
    if(this.props.userList){
      return (
        <div className="chat-users box">
          <div className="title">
            Chat
          </div>
          <div className="userlist">
            <ul>
              {
                this.props.userList.map((user, key) => {
                  return(
                    <User data={user} key={key} />
                  )
                })
              }
            </ul>
          </div>
        </div>
      )
    } else {
      return(
        <div className="chat-users box">
          <div className="title">
            Chat
          </div>
          <div className="userlist">
            <ul>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
