import React from 'react'
import { connect } from 'react-redux'

import ChatApp from './ChatApp'
import Dashboard from '../Dashboard'
import Header from '../Header'
import {
  CHAT_LOADED
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.common
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: CHAT_LOADED })
})

class Chat extends React.Component {
  render(){
    return(
      <div className="row">
        <Header />
        <div className="row">
          <div className="col span-1-of-4">
            <Dashboard active={'chat'}/>
          </div>
          <div className="col span-3-of-4">
            <ChatApp currentUser={this.props.currentUser} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
