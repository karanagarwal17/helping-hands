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
              <div className="col span-1-of-2 EventTitle">{this.props.data.name}</div>
              <div className="col span-1-of-2 EventType">{this.props.data.type}</div>
            </li><br/>
            <li className="email">{this.props.data.date}</li><br/>
            <li>{this.props.data.venue}</li>
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
