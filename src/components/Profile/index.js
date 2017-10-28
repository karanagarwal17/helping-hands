import React from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import Dashboard from '../Dashboard'
import Volunteer from './Volunteer'
import NgoProfile from './NgoProfile'

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
              <div className="col span-3-of-4">
                <Volunteer />
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
                <Dashboard active="profile"/>
              </div>
              <div className="col span-3-of-4">
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
