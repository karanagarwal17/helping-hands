import React from 'react'
import { connect } from 'react-redux'

import ChatApp from './ChatApp'
import Dashboard from '../Dashboard'
import NgoDashboard from '../NgoDashboard'
import Header from '../Header'
import UserList from './UserList'
import {
  CHAT_LOADED
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.common,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: CHAT_LOADED })
})

class Chat extends React.Component {
  render(){
    if(this.props.currentUser){
      if(this.props.currentUser.volunteer){
        return(
          <div className="row">
            <Header />
            <div className="row">
              <div className="col span-1-of-4">
                <Dashboard active={'chat'}/>
              </div>
              <div className="col span-1-of-4">
                <UserList />
              </div>
              <div className="col span-2-of-4">
                <ChatApp currentUser={this.props.currentUser} />
              </div>
            </div>
          </div>
        )
      } else if(this.props.currentUser.ngo) {
        return(
          <div className="row">
            <Header />
            <div className="row">
              <div className="col span-1-of-4">
                <NgoDashboard active={'chat'}/>
              </div>
              <div className="col span-1-of-4">
                <UserList />
              </div>
              <div className="col span-2-of-4">
                <ChatApp currentUser={this.props.currentUser} />
              </div>
            </div>
          </div>
        )
      }
    } else {
      return(
        <div>
          Error
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
