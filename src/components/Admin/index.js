import React from 'react'
import NgoList from './NgoList'
import Header from '../Header'
import { connect } from 'react-redux'
import {
  FETCH_UNAPPROVED_NGO
} from '../../constants/actionTypes'

const mapStateToProps = state => ({
  ...state.admin
})

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: FETCH_UNAPPROVED_NGO })
})

class Admin extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div className="admin-panel">
          <h4>Welcome to the Admin Panel</h4>
          <div className="row title">
            <h5>NGOs to review</h5>
          </div>
          <div className="row ngo-list">
            <NgoList />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
