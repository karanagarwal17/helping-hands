import React from 'react'
import { Link } from 'react-router'
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


class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="title">
          Hey Volunteer!
        </div>
        <div className="tabs">
          <ul>
            <Link to='/'>
              <li className={(this.props.active === 'search' ? 'active' : '')}>
                Search
              </li>
            </Link>
            <Link to='profile'>
              <li className={(this.props.active === 'profile' ? 'active' : '')}>
                Profile
              </li>
            </Link>
            <Link to='message'>
              <li className={(this.props.active === 'chat' ? 'active' : '')}>
                Chat
              </li>
            </Link>
            <Link to='edit'>
              <li className={(this.props.active === 'edit' ? 'active' : '')}>
                Edit Profile
              </li>
            </Link>
            <Link to='/'>
              <li className={(this.props.active === 'events' ? 'active' : '')}>
                Events
              </li>
            </Link>
            <li className={(this.props.active === 'logout' ? 'active' : '')} onClick={this.props.onLogout}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
