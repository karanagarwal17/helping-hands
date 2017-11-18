import React from 'react'
import { connect } from 'react-redux'

import ChatApp from './ChatApp'
import Dashboard from '../Dashboard'
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
  componentWillReceiveProps(nextProps){

  }

  render(){
    if(this.props.currentUser){
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
              <ChatApp currentUser={this.props.currentUser} params={this.props.params}/>
            </div>
          </div>
        </div>
      )
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
