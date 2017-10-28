import React from 'react'
import Header from '../Header'
import Dashboard from '../Dashboard'
import Volunteer from './Volunteer'

class Profile extends React.Component {
  render(){
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
  }
}

export default Profile
