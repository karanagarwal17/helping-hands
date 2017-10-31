import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import Dashboard from '../Dashboard'
import Volunteer from './Volunteer'
import NgoProfile from './NgoProfile'
import NgoDashboard from '../NgoDashboard'
import VolunteerContainer from './VolunteerContainer'
import Following from './Following'


const mapStateToProps = state => ({
  ...state,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({

})

class Profile extends React.Component {
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
              <div className="col span-3-of-4 tabsContainer box">
                <VolunteerContainer />
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
