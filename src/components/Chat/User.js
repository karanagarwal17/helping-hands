import React from 'react'
import { Link } from 'react-router'

class User extends React.Component {
  render() {
    return (
      <Link to="chat">
        <li className="user">
          <div>
            <div className="user-image">
              <img src="img/girl1.jpg" alt="avatar"/>
            </div>
            <div className="about">
              <div className="name">Aiden Chavez</div>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default User
