import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Header />
        <div className="col span-1-of-4">
          <Dashboard/>
        </div>
        <div className="col span-8-of-12 hero">
            <div className="col span-1-of-3 imageContainer">
              <img src="img/background.jpg" alt="Profile icon" className="profileImage"/>
            </div>
            <div className="col span-2-of-3 detailsContainer ">
            <div className="detailTitle">
              Meetasha Gaur
            </div>
            <div className="details">
              <ul>
                <li>Student</li><br/>
                <li className="email">Meetaasha29@gmail.com</li>
                <li>Jaipur 9782976966</li>
              </ul>
               <button class="button">Followers!</button> 

            </div>

            </div>
        </div>
      </div>
    )
  }
}

export default Profile
