import React from 'react'
import { connect } from 'react-redux'
import {
  LOGOUT
} from '../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.common,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onLogout: () =>
    dispatch ({ type: LOGOUT })
})

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">Helping Hands</div>
        <button className="btn logout-button" onClick={this.props.onLogout}>
          LOGOUT
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
