import React from 'react'
import { connect } from 'react-redux'
import agent from '../../agent'

import Header from '../Header'
import Dashboard from '../Dashboard'
import Volunteer from './Volunteer'
import NgoProfile from './NgoProfile'
import NgoDashboard from '../NgoDashboard'
import Following from './Following'
import {
  PROFILE_LOAD
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.profile,
  currentUser: state.common.currentUser,
  profile: state.profile.profile
})

const mapDispatchToProps = dispatch => ({
  onLoad: (id) =>
    dispatch({ type: PROFILE_LOAD, payload: id })
})

class Profile extends React.Component {
  componentWillMount(){
    this.props.onLoad(this.props.params.id)
  }

  render(){
    if(this.props.currentUser){
      if(this.props.currentUser.volunteer){
        return(
          <div>
            <Header />
            <div className="row profile">
              <div className="col span-1-of-4">
                <Dashboard active="profile"/>
              </div>
              <div className="col span-3-of-4 hero box">
                <Volunteer />
              </div>
              <div className="col span-3-of-4 followingContainer box">
                <Following />
              </div>
            </div>

          </div>
        )
      } else if(this.props.currentUser.ngo){
        return(
          <div>
            <Header />
            <div className="row profile">
              <div className="col span-1-of-4">
                <NgoDashboard active="profile"/>
              </div>
              <div className="col span-3-of-4 hero">
                <NgoProfile />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
