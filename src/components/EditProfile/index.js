import React from 'react'
import Dashboard from '../Dashboard'
import NgoDashboard from '../NgoDashboard'
import Volunteer from './Volunteer'
import Header from '../Header'
import Ngo from './Ngo'
import {connect} from 'react-redux'
import {
  NOT_LOGGED_IN
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onLoggedOut: () =>
    dispatch({ type: NOT_LOGGED_IN })
})

class EditProfile extends React.Component {
  render() {
    if(this.props.currentUser){
      if(this.props.currentUser.volunteer) {
        return (
          <div>
            <Header/>
            <div className="row">
              <div className="col span-1-of-4">
                <Dashboard active="edit"/>
              </div>
              <div className="col span-3-of-4">
                <Volunteer/>
              </div>
            </div>
          </div>
        )
      } else if (this.props.currentUser.ngo) {
        return (
          <div>
            <Header/>
            <div className="row">
              <div className="col span-1-of-4">
                <NgoDashboard active="edit"/>
              </div>
              <div className="col span-3-of-4">
                <Ngo step={this.props.step}/>
              </div>
            </div>
          </div>
        )
      }
    } else {
      this.props.onLoggedOut()
    }
    return (
      <div>
        Error
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
