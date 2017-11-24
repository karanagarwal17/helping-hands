import React from 'react'
import { Link } from 'react-router'

class User extends React.Component {
  render() {
    return (
      <Link to={`chat/${this.props.data._id}`}>
        <li className={(this.props.active) ? "user active" : "user"}>
          <div>
            <div className="user-image">
              <img src="img/user.png" alt="avatar"/>
            </div>
            <div className="about">
              <div className="name">{this.props.data.username}</div>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default User
