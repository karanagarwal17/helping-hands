import React from 'react'

class Volunteer extends React.Component {
  render() {
    return (
      <div>
        <div className="col span-1-of-3 imageContainer">
          <img src="img/girl1.jpg" alt="Profile icon" className="profileImage"/>
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
            <button class="button">Following</button>
          </div>
        </div>
        <div className="tabsContainer">
          <div className="col span-1-of-2 o1">
              Following NGOs
          </div>
          <div className="col span-1-of-2 o1">
              Events
          </div>
        </div>
      </div>
    )
  }
}

export default Volunteer
