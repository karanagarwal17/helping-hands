import React from 'react'
import EventCard from './EventCard'

class Events extends React.Component {
  render() {
    return (
      <div>
        <div className="EventCard">
          <EventCard/>
        </div>
        <div className="EventCard">
          <EventCard/>
        </div>
      </div>

    )
  }
}

export default Events
