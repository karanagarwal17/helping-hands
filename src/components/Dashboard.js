import React from 'react'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="title">
          Hey Volunteer!
        </div>
        <div className="tabs">
          <ul>
            <li className="tab active">
              Search
            </li>
            <li className="tab">
              Profile
            </li>
            <li>
              Edit Profile
            </li>
            <li>
              Logout
            </li>
            <li>
              Events
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Dashboard
