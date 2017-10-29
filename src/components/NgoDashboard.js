import React from 'react'

class NgoDashboard extends React.Component {
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
              Add Events
            </li>
            <li>
              Logout
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default NgoDashboard
