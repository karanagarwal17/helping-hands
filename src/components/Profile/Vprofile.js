import React from 'react'
import Header from '../Header'
import Dashboard from '../Dashboard'
import Volunteer from './Volunteer'
import VolunteerContainer from './VolunteerContainer'
import Following from './Following'
import Events from './Events'


class Vprofile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row profile">
          <div className="col span-1-of-5">
            <Dashboard active="profile"/>
          </div>
          <div className="col span-4-of-5 hero">
            <Volunteer />
          </div>
        <div className="col span-4-of-5 tabsContainer">
          <VolunteerContainer />
        </div>

        <div className="col span-4-of-5 EventContainer">
        <Events />
        </div>
      </div>
      </div>
    )
  }
}

export default Vprofile
