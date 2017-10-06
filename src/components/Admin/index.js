import React from 'react'
import NgoCard from './NgoCard'
import Header from '../Header'
import { connect } from 'react-redux'
import agent from '../../agent'
import {
  FETCH_UNAPPROVED_NGO,
  NGO_ACCEPTED,
  NGO_REJECTED
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.admin,
  ngos: state.admin.ngos
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: FETCH_UNAPPROVED_NGO, payload: agent.Admin.getNgo() }),
  onAccept: (id) =>
    dispatch({ type: NGO_ACCEPTED, payload: agent.Admin.accept(id)}),
  onReject: (id) =>
    dispatch({ type: NGO_REJECTED, payload: agent.Admin.reject(id)})
})

class Admin extends React.Component {
  componentWillMount(){
    this.props.onLoad()
  }

  render(){
    if(this.props.ngos) {
      return (
        <div>
          <Header />
          <div className="admin-panel">
            <h4>Welcome to the Admin Panel</h4>
            <div className="row title">
              <h5>NGOs to review</h5>
            </div>
            <div className="row ngo-list">
              {
                this.props.ngos.map((ngo, index) => {
                  if(index <18 )
                  return ( <NgoCard data={ngo} key={ngo._id} accept={this.props.onAccept()} reject={this.props.onReject()} /> )
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
