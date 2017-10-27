import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import ProfileDetails from './ProfileDetails'


class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Header />

        <div className="col span-1-of-4">
          <Dashboard/>
        </div>
        <div className="col span-8-of-12 hero">
        <ProfileDetails/>
        </div>


        <div className="col span-8-of-12">
        <div className="homeContainer">
          hello
          </div>
        </div>
        </div>

    )
  }
}

export default Profile
