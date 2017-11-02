import React from 'react'
import { connect } from 'react-redux'
import agent from '../../agent'
import {
  FOLLOW_NGO
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.common,
  currentUser: state.common.currentUser
})

const mapDispatchToProps = dispatch => ({
  onFollow: () =>
    dispatch({ type: FOLLOW_NGO })
})

class NgoProfile extends React.Component {
  render() {
    return (
      <div className="row box">
        <div className="col span-1-of-3 imageContainer">
          <img src="img/background.jpg" alt="Profile icon" className="profileImage"/>
        </div>
        <div className="col span-2-of-3 detailsContainer ">
          <div className="detailTitle">
            {this.props.currentUser.ngoId.org_name}
          </div>
          <div className="details">
            <ul>
              <li className="type-ngo">{this.props.currentUser.ngoId.category}</li><br/>
              <li>Head: {this.props.currentUser.ngoId.head_name}</li>
              <li className="email">{this.props.currentUser.ngoId.email}</li><br/>
              <li>{this.props.currentUser.ngoId.address.street_address}, {this.props.currentUser.ngoId.address.city},{this.props.currentUser.ngoId.address.district},{this.props.currentUser.ngoId.address.state}</li>
              <li>{this.props.currentUser.ngoId.address.landline}</li>
            </ul>
            <button className="button">Follow</button>
            <button className="button">Chat</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NgoProfile)
