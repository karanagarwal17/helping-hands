import React from 'react'
import { Link } from 'react-router'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="title">
          Hey Volunteer!
        </div>
        <div className="tabs">
          <ul>
            <Link to='/'>
              <li className={(this.props.active === 'search' ? 'active' : '')}>
                Search
              </li>
            </Link>
            <Link to='profile'>
              <li className={(this.props.active === 'profile' ? 'active' : '')}>
                Profile
              </li>
            </Link>
            <Link to='edit'>
              <li className={(this.props.active === 'edit' ? 'active' : '')}>
                Edit Profile
              </li>
            </Link>
            <Link to='/'>
              <li className={(this.props.active === 'events' ? 'active' : '')}>
                Events
              </li>
            </Link>
            <Link to='/'>
              <li className={(this.props.active === 'logout' ? 'active' : '')}>
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Dashboard
