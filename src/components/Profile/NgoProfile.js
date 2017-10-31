import React from 'react'

class NgoProfile extends React.Component {
  render() {
    return (
      <div className="row box">
        <div className="col span-1-of-3 imageContainer">
          <img src="img/background.jpg" alt="Profile icon" className="profileImage"/>
        </div>
        <div className="col span-2-of-3 detailsContainer ">
          <div className="detailTitle">
            Helping hands
          </div>
          <div className="details">
            <ul>
              <li className="type-ngo">Orphanage</li><br/>
              <li>VICE PRESIDENT: Meetasha Gaur</li>
              <li className="email">Meetaasha29@gmail.com</li><br/>
              <li>E-305 Vaishali nagar</li>
              <li>Jaipur 9782976966</li>
            </ul>
            <button className="button">Follow</button>
            <button className="button">Chat</button>
          </div>
        </div>
      </div>
    )
  }
}
export default NgoProfile
