import React from 'react'
import { connect } from 'react-redux'
import agent from '../../../agent'
import { Link } from 'react-router'

import EventCard from '../EventCard'
import Header from '../../Header'
import Dashboard from '../../Dashboard'
import {
  EVENTS_LOAD,
  PROFILE_LOAD,
  PROFILE_UNLOAD,
  FOLLOW_NGO
} from '../../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.profile,
  currentUser: state.common.currentUser,
  profile: state.profile.profile,
  events: state.profile.events
})

const mapDispatchToProps = dispatch => ({
  onFollow: () =>
    dispatch({type: FOLLOW_NGO}),
  onLoad: (id) =>{
    dispatch({type: EVENTS_LOAD, payload: agent.Ngo.events(id)})
    dispatch({type: PROFILE_LOAD, payload: agent.Ngo.get(id)})
  },
  onUnload: () =>
    dispatch({type: PROFILE_UNLOAD})
})

class NgoProfile extends React.Component {
  componentWillMount() {
    this.props.onLoad(this.props.params.id)
  }

  componentWillUnmount(){
    this.props.onUnload()
  }

  render() {
    if (this.props.profile && this.props.events) {
      return (
        <div>
          <Header/>
          <div className="row profile">
            <div className="col span-1-of-4">
              <Dashboard active="profile"/>
            </div>
            <div className="col span-3-of-4 hero box">
              <div className="row">
                <div className="col span-1-of-3">
                  <div className="imageContainer">
                    <img src="img/background.jpg" alt="Profile icon" className="profileImage"/>
                  </div>
                </div>
                <div className="col span-2-of-3">
                  <div className="detailsContainer">
                    <div className="detailTitle">
                      {this.props.profile.org_name}
                    </div>
                    <div className="details">
                      <ul>
                        <li className="type-ngo">{this.props.profile.category}</li><br/>
                        <li>Head: {this.props.profile.head_name}</li>
                        <li className="email">{this.props.profile.email}</li><br/>
                        {/* <li>{this.props.profile.address.street_address}, {this.props.profile.address.city},{this.props.profile.address.district},{this.props.profile.address.state}</li>
                        <li>{this.props.profile.address.landline}</li> */}
                      </ul>
                      <Link to={`chat/${this.props.profile.created_by}`}>
                        <button className="button">Chat</button>
                      </Link>
                      <Link to={`donate/${this.props.profile._id}`}>
                        <button className="button">Donate</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row tabsContainer">
                <div className="col span-1-of-2 o1">
                  Events
                </div>
              </div>
            </div>
            <div className="col span-3-of-4 followingContainer box">
              {
                this.props.events.map((event, key) => {
                  return(
                    <EventCard data={event} key={key} currentUser={this.props.currentUser}/>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NgoProfile)
