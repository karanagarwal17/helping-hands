import React from 'react'

class EventCard extends React.Component {
  render() {
    return (
      <div className="row eventCard">
        <div className="col span-2-of-7 ImageContainer">
          <img src="img/ngo2.jpeg" alt="Profile icon" className="hImage"/>
        </div>
        <div className="col span-4-of-7 DetailsContainer">
          <ul>
            <li className="row">
              <div className="col span-1-of-2 EventTitle">NGO Day</div>
              <div className="col span-1-of-2 EventType">Donation 29 April 2017</div>
            </li><br/>
            <li className="email">Meetaasha29@gmail.com</li><br/>
            <li>E-305 Vaishali nagar Jaipur 9782976966</li>
          </ul>
        </div>
        <div className="col span-1-of-7 ButtonContainer">
          <button className="button">Apply</button>
        </div>
      </div>
    )
  }
}

export default EventCard
