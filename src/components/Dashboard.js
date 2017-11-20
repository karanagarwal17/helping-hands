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

const Profile = props => {
  if(props.props.currentUser.volunteer){
    return(
      <Link to={'profile/volunteer/' + props.props.currentUser.volunteerId._id}>
        <li className={(props.props.active === 'profile' ? 'active' : '')}>
          Profile
        </li>
      </Link>
    )
  } else if(props.props.currentUser.ngo){
    return(
      <Link to={'profile/ngo/' + props.props.currentUser.ngoId._id}>
        <li className={(props.props.active === 'profile' ? 'active' : '')}>
          Profile
        </li>
      </Link>
    )
  }
  return null
}

const AddEvent = props => {
  if(props.props.currentUser.ngo){
    return(
      <Link to='addevent'>
        <li className={(props.props.active === 'addevent' ? 'active' : '')}>
          Add Events
        </li>
      </Link>
    )
  }
  return null
}

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard box">
        <div className="title">
          Hey {this.props.currentUser.username}
        </div>
        <div className="tabs">
          <ul>
            <Link to='search'>
              <li className={(this.props.active === 'search' ? 'active' : '')}>
                Search
              </li>
            </Link>
            <Profile props={this.props}/>
            <Link to='chat'>
              <li className={(this.props.active === 'chat' ? 'active' : '')}>
                Chat
              </li>
            </Link>
            <Link to='edit'>
              <li className={(this.props.active === 'edit' ? 'active' : '')}>
                Edit Profile
              </li>
            </Link>
            <AddEvent props={this.props}/>
            <Link to='donations'>
              <li className={(this.props.active === 'donations' ? 'active' : '')}>
                Donations
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
